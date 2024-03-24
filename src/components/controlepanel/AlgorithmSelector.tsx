import clsx from "clsx";
import { algorithmListType } from "@/assets/constants";
import "./AlgorithmSelector.css";

interface IAlgorithmSelectorParams {
  algoList: algorithmListType,
  algoUsed: string,
  onAlgoUsedChange: (event: React.MouseEvent<HTMLLIElement>) => void
}

function AlgorithmSelector(props: IAlgorithmSelectorParams) {
  const algoList = props.algoList;
  const algoUsed = props.algoUsed ? props.algoUsed : "Select Aglorithm";
  const onAlgoUsedChange = props.onAlgoUsedChange;

  return (
    <div className="AlgorithmSelector">
      <div className="DropDown">
        <p>
          {algoUsed}
        </p>
        <div className="DropDownList">
          <ul>
            {Object.keys(algoList).map(item => {
              return (
                <li
                  className={
                    clsx("flex flex-col w-full h-[42.2px] pt-[10px] text-center box-border",
                    (algoList[item] || item === "None")
                    ? "hover:opacity-80 cursor-pointer bg-white"
                    : "bg-gray-200 cursor-default")
                    }
                  key={item} onClick={onAlgoUsedChange}
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
