import React from "react";
import { type controlPanelConstantsType } from "@/assets/constants";
import AlgorithmSelector from "./AlgorithmSelector";
import Selector from "./Selector";

interface IControlPanelParams {
  constants: controlPanelConstantsType;
  algoUsed: string;
  playing: boolean;
  onDataBarsChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onAnimationTimeChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onDataSpreadChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onAlgoUsedChange: (event: React.MouseEvent<HTMLLIElement>) => void;
}

function ControlPanel(props: IControlPanelParams): JSX.Element {
  const controlPanelConstants = props.constants;
  return (
    <div className="relative flex h-full w-full flex-col bg-white bg-opacity-10">
      <div className="m-auto h-[15%] w-[90%] bg-white bg-opacity-10">
        <AlgorithmSelector
          algoList={controlPanelConstants.ALGOLIST}
          algoUsed={props.algoUsed}
          onAlgoUsedChange={props.onAlgoUsedChange}
        />
      </div>
      <div className="m-auto h-[15%] w-[90%] bg-white bg-opacity-10">
        <Selector
          label="Generate Data"
          min={controlPanelConstants.MINDATABARS}
          max={controlPanelConstants.MAXDATABARS}
          step={controlPanelConstants.DATABARSSTEP}
          default={controlPanelConstants.DEFAULTDATABARS}
          onChange={props.onDataBarsChange}
        />
      </div>
      <div className="m-auto h-[15%] w-[90%] bg-white bg-opacity-10">
        <Selector
          label="Animation Time"
          min={controlPanelConstants.MINTIME}
          max={controlPanelConstants.MAXTIME}
          step={controlPanelConstants.TIMESTEP}
          default={controlPanelConstants.DEFAULTTIME}
          onChange={props.onAnimationTimeChange}
        />
      </div>
      <div className="m-auto h-[15%] w-[90%] bg-white bg-opacity-10">
        <Selector
          label="Maximum Data"
          min={controlPanelConstants.MINDATASPREAD}
          max={controlPanelConstants.MAXDATASPREAD}
          step={controlPanelConstants.DATASPREADSTEP}
          default={controlPanelConstants.DEFAULTDATASPREAD}
          onChange={props.onDataSpreadChange}
        />
      </div>
      {props.playing && (
        <div className="absolute left-0 top-0 h-full w-full bg-gray-400 bg-opacity-20" />
      )}
    </div>
  );
}

export default ControlPanel;
