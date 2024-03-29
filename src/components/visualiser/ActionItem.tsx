import React from "react";
import { type IconType } from "react-icons";

interface IActionItemParams {
  disabled: boolean;
  Icon: IconType;
  onPlayControlAction: () => void;
}

function ActionItem(props: IActionItemParams): JSX.Element {
  const handleClick = (event: React.MouseEvent<HTMLDivElement>): void => {
    event.preventDefault();
    if (!props.disabled) props.onPlayControlAction();
  };

  return (
    <div className="float-left box-border h-full w-[25%] bg-[rgba(255,_255,_255,_0.1)] transition-colors duration-1000 first:rounded-bl-[10px] first:rounded-tl-[10px] last:rounded-br-[10px] last:rounded-tr-[10px] hover:bg-[rgba(255,_255,_255,_0.5)]">
      <div
        className={`flex h-full w-full cursor-pointer flex-col ${props.disabled ? "opacity-50" : ""}`}
        onClick={handleClick}
      >
        <span className="m-auto block w-6">
          <props.Icon size={24} color="white" />
        </span>
      </div>
    </div>
  );
}

export default ActionItem;
