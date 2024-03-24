import clsx from "clsx";
import { algorithmListType } from "@/assets/constants";
import "./AlgorithmSelector.css";

interface IAlgorithmSelectorParams {
  algoList: algorithmListType;
  algoUsed: string;
  onAlgoUsedChange: (event: React.MouseEvent<HTMLLIElement>) => void;
}

function AlgorithmSelector(props: IAlgorithmSelectorParams) {
  const algoList = props.algoList;
  const algoUsed =
    props.algoUsed !== "None" ? props.algoUsed : "Select Aglorithm";
  const onAlgoUsedChange = props.onAlgoUsedChange;

  return (
    <div className="AlgorithmSelector">
      <div className="DropDown">
        <p>{algoUsed}</p>
        <div className="DropDownList">
          <ul>
            {Object.keys(algoList).map((item) => {
              return (
                <li
                  className={clsx(
                    "box-border flex h-[42.2px] w-full flex-col pt-[10px] text-center",
                    algoList[item] || item === "None"
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
