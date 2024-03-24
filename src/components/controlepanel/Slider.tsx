import React from "react";
import "./Slider.css";

interface ISliderParams {
  minData: number;
  maxData: number;
  defaultData: number;
  step: number;
  onDataChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function Slider(props: ISliderParams): JSX.Element {
  const minData = props.minData;
  const maxData = props.maxData;
  const defaultData = props.defaultData;
  const onDataChange = props.onDataChange;
  const step = props.step;

  return (
    <div className="Slider">
      <input
        type="range"
        min={minData}
        max={maxData}
        step={step}
        className="slider"
        defaultValue={defaultData}
        id="myslider"
        onChange={onDataChange}
      />
    </div>
  );
}

export default Slider;
