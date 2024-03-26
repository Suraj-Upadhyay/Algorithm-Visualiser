import React from "react";
import Slider from "./Slider";

interface ISelectorParams {
  label: string;
  min: number;
  max: number;
  default: number;
  step: number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function Selector(props: ISelectorParams): JSX.Element {
  return (
    <div className="m-auto flex h-full w-[70%] flex-col justify-center">
      <p className="m-0 p-0 text-center font-extrabold text-white">
        {props.label}
      </p>
      <div>
        <span className="relative -left-[10px] float-left m-0 p-0 text-center font-extrabold text-white">
          {props.min}
        </span>
        <span className="relative -right-[10px] float-right m-0 p-0 text-center font-extrabold text-white">
          {props.max}
        </span>
        <Slider
          minData={props.min}
          maxData={props.max}
          step={props.step}
          defaultData={props.default}
          onDataChange={props.onChange}
        />
      </div>
    </div>
  );
}

export default Selector;
