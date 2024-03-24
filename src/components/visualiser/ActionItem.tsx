import React from 'react'

interface IActionItemParams {
  googleIcon: string;
  onPlayControlAction: (event: React.MouseEvent<HTMLDivElement>) => void;
}

function ActionItem(props: IActionItemParams) {
  return (
    <div className="flex flex-col h-full w-full cursor-pointer" onClick={props.onPlayControlAction}>
      <span className="material-symbols-outlined block w-6 m-auto">
        {props.googleIcon}
      </span>
    </div>
  );
}

export default ActionItem;
