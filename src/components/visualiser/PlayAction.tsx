import React from "react";
import "./PlayAction.css";

interface IPlayActionParams {
  googleIcon: string;
  onPlayControlAction: (event: React.MouseEvent<HTMLDivElement>) => void;
}

function PlayAction(props: IPlayActionParams): JSX.Element {
  return (
    <div className="PlayAction" onClick={props.onPlayControlAction}>
      <span className="material-symbols-outlined">{props.googleIcon}</span>
    </div>
  );
}

export default PlayAction;
