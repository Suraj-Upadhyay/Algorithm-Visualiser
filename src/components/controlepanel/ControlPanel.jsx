import "./ControlPanel.css";
import AlgorithmSelector from "./AlgorithmSelector";
import DataLengthSelector from "./DataLengthSelector";
import DataSizeSelector from "./DataSizeSelector";
import TimeLengthSelector from "./TimeLengthSelector";

function ControlPanel(props) {
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
          defaultDataBars={controlPanelConstants.DEFAULTDATABARS}
          onDataBarsChange={props.onDataBarsChange}
        />
      </div>
      <div className="interactables">
        <TimeLengthSelector
          minTime={controlPanelConstants.MINTIME}
          maxTime={controlPanelConstants.MAXTIME}
          defaultTime={controlPanelConstants.DEFAULTTIME}
          onAnimationTimeChange={props.onAnimationTimeChange}
        />
      </div>
      <div className="interactables">
        <DataSizeSelector
          minDataSize={controlPanelConstants.MINDATASPREAD}
          maxDataSize={controlPanelConstants.MAXDATASPREAD}
          defaultDataSize={controlPanelConstants.DEFAULTDATASPREAD}
          onDataSizeChange={props.onDataSpreadChange}
        />
      </div>
      {props.playing &&
        <div className="absolute top-0 left-0 bg-gray-400 bg-opacity-20 h-full w-full" />}
    </div>
  );
}

export default ControlPanel;
