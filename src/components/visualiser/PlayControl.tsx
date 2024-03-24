import React from "react";
import "./PlayControl.css";
import { type IGoogleIconTexts } from "@/assets/constants";
import ActionItem from "./ActionItem";

interface IPlayControlParams {
  googleIconText: IGoogleIconTexts;
  onPlayControlAction: (event: React.MouseEvent<HTMLDivElement>) => void;
}

function PlayControl(props: IPlayControlParams): JSX.Element {
  return (
    <div className="relative z-10 h-full w-full rounded-[10px]">
      <ActionItem
        googleIcon={props.googleIconText.pause}
        onPlayControlAction={props.onPlayControlAction}
      />
      <ActionItem
        googleIcon={props.googleIconText.play}
        onPlayControlAction={props.onPlayControlAction}
      />
      <ActionItem
        googleIcon={props.googleIconText.forward}
        onPlayControlAction={props.onPlayControlAction}
      />
      <ActionItem
        googleIcon={props.googleIconText.backward}
        onPlayControlAction={props.onPlayControlAction}
      />
    </div>
  );
}

export default PlayControl;
