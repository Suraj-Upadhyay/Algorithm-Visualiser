import "./TimeLengthSelector.css";
import Slider from "./Slider";

interface ITimeLengthSelectorParams {
  minTime: number;
  maxTime: number;
  defaultTime: number;
  step: number;
  onAnimationTimeChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function TimeLengthSelector(props: ITimeLengthSelectorParams) {
  return (
    <div className="TimeLengthSelector">
      <p>Animation Time</p>
      <div>
        <span className="minData">{props.minTime}</span>
        <span className="maxData">{props.maxTime}</span>
        <Slider
          minData={props.minTime}
          maxData={props.maxTime}
          step={props.step}
          defaultData={props.defaultTime}
          onDataChange={props.onAnimationTimeChange}
        />
      </div>
    </div>
  );
}

export default TimeLengthSelector;
