import "./ControlPanel.css";
import { AlgorithmSelector,
         DataLengthSelector,
         DataSizeSelector,
         TimeLengthSelector }
from "./components";

function ControlPanel(props) {
    const controlPanelConstants = props.constants;
    return (
        <div className="ControlPanel">
            <div>
                <AlgorithmSelector
                    algoList={controlPanelConstants.ALGOLIST}
                    algoUsed={props.algoUsed}
                    onAlgoUsedChange={props.onAlgoUsedChange}
                />
            </div>
            <div>
                <DataLengthSelector
                    minDataBars={controlPanelConstants.MINDATABARS}
                    maxDataBars={controlPanelConstants.MAXDATABARS}
                    defaultDataBars={controlPanelConstants.DEFAULTDATABARS}
                    dataBars={props.dataBars}
                    onDataBarsChange={props.onDataBarsChange}
                />
            </div>
            <div>
                <TimeLengthSelector
                    minTime={controlPanelConstants.MINTIME}
                    maxTime={controlPanelConstants.MAXTIME}
                    defaultTime={controlPanelConstants.DEFAULTTIME}
                    animationTime={props.animationTime}
                    onAnimationTimeChange={props.onAnimationTimeChange}
                />
            </div>
             <div>
                <DataSizeSelector
                    minDataSize={controlPanelConstants.MINDATASPREAD}
                    maxDataSize={controlPanelConstants.MAXDATASPREAD}
                    defaultDataSize={controlPanelConstants.DEFAULTDATASPREAD}
                    dataSize={props.dataSpread}
                    onDataSizeChange={props.onDataSpreadChange}
                />
            </div>
        </div>
    );
}

export default ControlPanel;
