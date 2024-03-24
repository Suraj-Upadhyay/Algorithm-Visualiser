import React from "react";
import "./StepForwardAction.css";

interface IStepForwardActionParams {
  googleIcon: string;
  onPlayControlAction: (event: React.MouseEvent<HTMLDivElement>) => void;
}

function StepForwardAction(props: IStepForwardActionParams): JSX.Element {
  return (
    <div className="StepForwardAction cursor-pointer" onClick={props.onPlayControlAction}>
      <span className="material-symbols-outlined">
        {props.googleIcon}
      </span>
    </div>
  );
}

export default StepForwardAction;
