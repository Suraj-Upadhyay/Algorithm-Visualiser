import "./Visualiser.css";
import { useEffect, useRef, useState } from "react";
import DataView from "./DataView";
import PlayControl from "./PlayControl";
import { googleIconTexts } from "@/assets/constants";
import { Algorithm } from "@/assets/algorithms";

interface IVisualiserParams {
  dataBars: number,
  animationTime: number,
  dataSpread: number,
  algoUsed: string,
  setPlaying: React.Dispatch<React.SetStateAction<boolean>>;
}

function Visualiser(props: IVisualiserParams) {
  const dataLength = props.dataBars;
  const animationTime = props.animationTime;
  const maxData = props.dataSpread;
  const algorithmName = props.algoUsed;

  const algorithmObjectRef = useRef<Algorithm | null>(null);

  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [stepNumber, setStepNumber] = useState<number>(0);
  const [data, setData] = useState<{ data: number; index?: number }[]>([]);

  const onPlayControlAction = (event: React.MouseEvent<HTMLDivElement>) => {
    const actionItemClicked = (event.target as HTMLElement).textContent;
    let newStepNumber;
    // eslint-disable-next-line
    switch (actionItemClicked) {
      case googleIconTexts.play:
        setIsPlaying(true);
        props.setPlaying(true);
        break;
      case googleIconTexts.pause:
        setIsPlaying(false);
        props.setPlaying(false);
        break;
      case googleIconTexts.forward:
        newStepNumber = stepNumber + 1;
        setStepNumber(newStepNumber);
        break;
      case googleIconTexts.backward:
        newStepNumber = stepNumber - 1;
        setStepNumber(newStepNumber);
        break;
    }
  };

  useEffect(
    () => {
      algorithmObjectRef.current = new Algorithm(dataLength, maxData);
      algorithmObjectRef.current.createAlgorithmObject(algorithmName);
      setData(algorithmObjectRef.current.stepBackward());
      // eslint-disable-next-line
    },
    [dataLength, maxData]
  );

  useEffect(
    () => {
      algorithmObjectRef.current && algorithmObjectRef.current.createAlgorithmObject(algorithmName);
    },
    [algorithmName]
  );

  useEffect(
    () => {
      let interval: NodeJS.Timeout | null = null;

      if (isPlaying) {
        // Set up the interval
        interval = setInterval(() => {
          let data = algorithmObjectRef.current?.stepForward();
          data && setData(data);
          if (algorithmObjectRef.current?.done) {
            setIsPlaying(false);
            props.setPlaying(false);
          }
        }, animationTime * 10);
      } else if (!isPlaying && interval) {
        clearInterval(interval);
      }

      // Clean-up function
      return () => {
        if (interval) {
          clearInterval(interval);
        }
      };
    },
    [isPlaying]
  );

  return (
    <div className="Visualiser">
      <div className="PlayControlContainer">
        <PlayControl
          googleIconText={googleIconTexts}
          onPlayControlAction={onPlayControlAction}
        />
      </div>
      <div className="DataViewContainer">
        <DataView dataLength={dataLength} data={data} maxData={maxData} />
      </div>
    </div>
  );
}

export default Visualiser;
