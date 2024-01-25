import "./Visualiser.css";
import {useEffect, useState} from 'react';
import {PlayControl, DataView} from './components';
import { googleIconTexts } from "../../assets/constants";
import {Algorithm} from "../../assets/algorithms";

function Visualiser(props) {
  const dataLength = props.dataBars;
  const delay = props.animationTime;
  const maxData = props.dataSpread;
  const algorithmName = props.algoUsed;
  const onAlgoDoneChange = props.onAlgoDoneChange;

  const algorithmObject = new Algorithm(dataLength, maxData, algorithmName);

  const [isPlaying, setIsPlaying] = useState(false);
  const [stepNumber, setStepNumber] = useState(0);
  const [data, setData] = useState([]);

  const onPlayControlAction = (event) => {
    const actionItemClicked = event.target.textContent;
    switch(actionItemClicked) {
      case googleIconTexts.play:
        setIsPlaying(true);
        break;
      case googleIconTexts.pause:
        setIsPlaying(false);
        break;
      case googleIconTexts.forward:
        var newStepNumber = stepNumber + 1;
        setStepNumber(newStepNumber);
        break;
      case googleIconTexts.backward:
        var newStepNumber = stepNumber - 1;
        setStepNumber(newStepNumber);
        break;
    }
  };

  useEffect(() => {
    let interval = null;

    if (isPlaying) {
      // Set up the interval
      interval = setInterval(() => {
        let data = algorithmObject.stepForward();
        console.log(data);
        setData(data);
      }, 1000);
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
            data={data}
        />
      </div>
    </div>
  );
}

export default Visualiser;
