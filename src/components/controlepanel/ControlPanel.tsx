import "./ControlPanel.css";
import { controlPanelConstantsType } from "@/assets/constants";
import AlgorithmSelector from "./AlgorithmSelector";
import DataLengthSelector from "./DataLengthSelector";
import DataSizeSelector from "./DataSizeSelector";
import TimeLengthSelector from "./TimeLengthSelector";

interface IControlPanelParams {
  constants: controlPanelConstantsType;
  algoUsed: string;
  playing: boolean;
  onDataBarsChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onAnimationTimeChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onDataSpreadChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onAlgoUsedChange: (event: React.MouseEvent<HTMLLIElement>) => void;
}

function ControlPanel(props: IControlPanelParams) {
  const controlPanelConstants = props.constants;
  return (
    <div className={`ControlPanel relative ${props.playing && "disabled"}`}>
      <div className="interactables">
        <AlgorithmSelector
          algoList={controlPanelConstants.ALGOLIST}
          algoUsed={props.algoUsed}
          onAlgoUsedChange={props.onAlgoUsedChange}
        />
      </div>
      <div className="interactables">
        <DataLengthSelector
          minDataBars={controlPanelConstants.MINDATABARS}
          maxDataBars={controlPanelConstants.MAXDATABARS}
          step={controlPanelConstants.DATABARSSTEP}
          defaultDataBars={controlPanelConstants.DEFAULTDATABARS}
          onDataBarsChange={props.onDataBarsChange}
        />
      </div>
      <div className="interactables">
        <TimeLengthSelector
          minTime={controlPanelConstants.MINTIME}
          maxTime={controlPanelConstants.MAXTIME}
          step={controlPanelConstants.TIMESTEP}
          defaultTime={controlPanelConstants.DEFAULTTIME}
          onAnimationTimeChange={props.onAnimationTimeChange}
        />
      </div>
      <div className="interactables">
        <DataSizeSelector
          minDataSize={controlPanelConstants.MINDATASPREAD}
          maxDataSize={controlPanelConstants.MAXDATASPREAD}
          step={controlPanelConstants.DATASPREADSTEP}
          defaultDataSize={controlPanelConstants.DEFAULTDATASPREAD}
          onDataSizeChange={props.onDataSpreadChange}
        />
      </div>
      {props.playing && (
        <div className="absolute left-0 top-0 h-full w-full bg-gray-400 bg-opacity-20" />
      )}
    </div>
  );
}

export default ControlPanel;
