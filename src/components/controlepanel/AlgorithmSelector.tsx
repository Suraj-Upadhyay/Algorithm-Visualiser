import React from "react";
import clsx from "clsx";
import { type algorithmListType } from "@/assets/constants";

interface IAlgorithmSelectorParams {
  algoList: algorithmListType;
  algoUsed: string;
  onAlgoUsedChange: (event: React.MouseEvent<HTMLLIElement>) => void;
}

function AlgorithmSelector(props: IAlgorithmSelectorParams): JSX.Element {
  const algoList = props.algoList;
  const algoUsed =
    props.algoUsed !== "None" ? props.algoUsed : "Select Aglorithm";
  const onAlgoUsedChange = props.onAlgoUsedChange;

  return (
    <div className="h-full w-full">
      <div className="group relative top-[30%] m-auto h-[40%] w-[70%] rounded-[20px] bg-[#ff72f9]">
        <p className="m-auto cursor-pointer p-[10px] text-center font-extrabold text-white">
          {algoUsed}
        </p>
        <div className="absolute top-[43px] z-10 hidden h-[700%] w-full overflow-y-auto rounded-[20px] bg-[#fc8cf6] group-hover:block">
          <ul className="m-0 list-none p-0">
            {Object.keys(algoList).map((item) => {
              return (
                <li
                  className={clsx(
                    "box-border flex h-[42.2px] w-full flex-col pt-[10px] text-center",
                    algoList[item] !== null || item === "None"
                      ? "cursor-pointer bg-white hover:opacity-80"
                      : "cursor-default bg-gray-200",
                  )}
                  key={item}
                  onClick={onAlgoUsedChange}
                >
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AlgorithmSelector;
