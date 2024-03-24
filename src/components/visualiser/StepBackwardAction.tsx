import React from "react";
import "./StepBackwardAction.css";

interface IStepBackwardActionParams {
  googleIcon: string;
  onPlayControlAction: (event: React.MouseEvent<HTMLDivElement>) => void;
}

function StepBackwardAction(props: IStepBackwardActionParams): JSX.Element {
  return (
    <div className="StepBackwardAction cursor-pointer" onClick={props.onPlayControlAction}>
      <span className="material-symbols-outlined">
        {props.googleIcon}
      </span>
    </div>
  );
}

export default StepBackwardAction;
