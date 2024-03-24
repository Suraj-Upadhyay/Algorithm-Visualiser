import React from 'react'

interface IActionItemParams {
  googleIcon: string;
  onPlayControlAction: (event: React.MouseEvent<HTMLDivElement>) => void;
}

function ActionItem(props: IActionItemParams): JSX.Element {
  return (
    <div className="float-left w-[25%] h-full box-border bg-[rgba(255,_255,_255,_0.1)] transition-colors duration-1000 hover:bg-[rgba(255,_255,_255,_0.5)] first:rounded-tl-[10px] first:rounded-bl-[10px] last:rounded-tr-[10px] last:rounded-br-[10px]">
      <div className="flex flex-col h-full w-full cursor-pointer" onClick={props.onPlayControlAction}>
        <span className="material-symbols-outlined block w-6 m-auto">
          {props.googleIcon}
        </span>
      </div>
    </div>
  );
}

export default ActionItem;
