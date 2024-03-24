import React from "react";

interface IActionItemParams {
  googleIcon: string;
  onPlayControlAction: (event: React.MouseEvent<HTMLDivElement>) => void;
}

function ActionItem(props: IActionItemParams): JSX.Element {
  return (
    <div className="float-left box-border h-full w-[25%] bg-[rgba(255,_255,_255,_0.1)] transition-colors duration-1000 first:rounded-bl-[10px] first:rounded-tl-[10px] last:rounded-br-[10px] last:rounded-tr-[10px] hover:bg-[rgba(255,_255,_255,_0.5)]">
      <div
        className="flex h-full w-full cursor-pointer flex-col"
        onClick={props.onPlayControlAction}
      >
        <span className="material-symbols-outlined m-auto block w-6">
          {props.googleIcon}
        </span>
      </div>
    </div>
  );
}

export default ActionItem;
