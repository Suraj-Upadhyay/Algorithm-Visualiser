import "./Visualiser.css";
import {useEffect, useRef, useState} from 'react';
import {PlayControl, DataView} from './components';
import { googleIconTexts } from "../../assets/constants";
import {Algorithm} from "../../assets/algorithms";

function Visualiser(props) {
  const dataLength = props.dataBars;
  // eslint-disable-next-line
  const delay = props.animationTime;
  const maxData = props.dataSpread;
  const algorithmName = props.algoUsed;
  // eslint-disable-next-line
  const onAlgoDoneChange = props.onAlgoDoneChange;

  const algorithmObjectRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [stepNumber, setStepNumber] = useState(0);
  const [data, setData] = useState([]);

  const onPlayControlAction = (event) => {
    const actionItemClicked = event.target.textContent;
    let newStepNumber;
    // eslint-disable-next-line
    switch(actionItemClicked) {
      case googleIconTexts.play:
        setIsPlaying(true);
        break;
      case googleIconTexts.pause:
        setIsPlaying(false);
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

  useEffect(()=>{
    console.log("creating new algorithm")
    algorithmObjectRef.current = new Algorithm(dataLength, maxData);
    algorithmObjectRef.current.createAlgorithmObject(algorithmName);
    setData(algorithmObjectRef.current.stepBackward());
    // eslint-disable-next-line
  }, [dataLength, maxData]);

  useEffect(()=>{
    algorithmObjectRef.current.createAlgorithmObject(algorithmName);
  }, [algorithmName]);

  useEffect(() => {
    let interval = null;

    if (isPlaying) {
      // Set up the interval
      interval = setInterval(() => {
        let data = algorithmObjectRef.current.stepForward();
        console.log(data);
        setData(data);
      }, 100);
    } else if (!isPlaying && interval) {
      clearInterval(interval);
    }

    // Clean-up function
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isPlaying]);

  return (
    <div className="Visualiser">
      <div className="PlayControlContainer">
        <PlayControl
            googleIconText={googleIconTexts}
            onPlayControlAction={onPlayControlAction}
        />
      </div>
      <div className="DataViewContainer">
        <DataView
            dataLength={dataLength}
            data={data}
            maxData={maxData}
        />
      </div>
    </div>
  );
}

export default Visualiser;
