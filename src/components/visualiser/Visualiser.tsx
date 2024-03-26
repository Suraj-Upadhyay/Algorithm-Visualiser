import React, { useEffect, useRef, useState } from "react";
import DataView from "./DataView";
import ActionItem from "./ActionItem";
import { Algorithm } from "@/assets/algorithms";
import { ReactIcons } from "@/assets/constants";

interface IVisualiserParams {
  dataBars: number;
  animationTime: number;
  dataSpread: number;
  algoUsed: string;
  setPlaying: React.Dispatch<React.SetStateAction<boolean>>;
}

function Visualiser(props: IVisualiserParams): JSX.Element {
  const dataLength = props.dataBars;
  const animationTime = props.animationTime;
  const maxData = props.dataSpread;
  const algorithmName = props.algoUsed;

  const algorithmObjectRef = useRef<Algorithm | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [data, setData] = useState<Array<{ data: number; index?: number }>>([]);

  useEffect(() => {
    algorithmObjectRef.current = new Algorithm(dataLength, maxData);
    algorithmObjectRef.current.createAlgorithmObject(algorithmName);
    setData(algorithmObjectRef.current.stepBackward());
  }, [dataLength, maxData]);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isPlaying) {
      // Set up the interval
      interval = setInterval(() => {
        const data = algorithmObjectRef.current?.stepForward();
        data !== undefined && setData(data);
        if (
          algorithmObjectRef.current !== null &&
          algorithmObjectRef.current.done
        ) {
          setIsPlaying(false);
          props.setPlaying(false);
        }
      }, animationTime * 10);
    } else if (!isPlaying && interval !== null) {
      clearInterval(interval);
    }

    // Clean-up function
    return () => {
      if (interval !== null) {
        clearInterval(interval);
      }
    };
  }, [isPlaying]);

  const onPlay = (): void => {
    props.setPlaying(true);
    setIsPlaying(true);
  };

  const onStop = (): void => {
    setIsPlaying(false);
  };

  const onForward = (): void => {
    if (algorithmObjectRef.current === null) return;
    const forwardData = algorithmObjectRef.current.stepForward();
    setData(forwardData);
    if (algorithmObjectRef.current.done) {
      props.setPlaying(false);
    }
  };

  const onBackward = (): void => {
    if (algorithmObjectRef.current === null) return;
    const backwardData = algorithmObjectRef.current.stepBackward();
    setData(backwardData);
  };

  return (
    <div className="h-full w-full rounded-bl-[5px] border-b-[2px] border-l-[2px] border-solid border-white">
      <div className="float-right m-0 h-[40px] w-[240px] p-0">
        <div className="relative z-10 h-full w-full rounded-[10px]">
          <ActionItem
            disabled={!isPlaying}
            Icon={ReactIcons.pause}
            onPlayControlAction={onStop}
          />
          <ActionItem
            disabled={isPlaying}
            Icon={ReactIcons.play}
            onPlayControlAction={onPlay}
          />
          <ActionItem
            disabled={isPlaying}
            Icon={ReactIcons.forward}
            onPlayControlAction={onForward}
          />
          <ActionItem
            disabled={isPlaying}
            Icon={ReactIcons.backward}
            onPlayControlAction={onBackward}
          />
        </div>
      </div>
      <div className="h-full w-full">
        <DataView dataLength={dataLength} data={data} maxData={maxData} />
      </div>
    </div>
  );
}

export default Visualiser;
