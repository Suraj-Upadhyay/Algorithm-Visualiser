import "./ControlPanel.css";
import { AlgorithmSelector,
         DataLengthSelector,
         DataSizeSelector,
         TimeLengthSelector }
from "./components";

function ControlPanel(props) {
    return (
        <div className="ControlPanel">
            <div className="AlgorithmSelectorContainer">
                <AlgorithmSelector></AlgorithmSelector>
            </div>
            <div className="DataLengthSelectorContainer">
                <DataLengthSelector></DataLengthSelector>
            </div>
            <div className="TimeLengthSelectorContainer">
                <TimeLengthSelector></TimeLengthSelector>
            </div>
             <div className="DataSizeSelectorContainer">
                <DataSizeSelector></DataSizeSelector>
            </div>
        </div>
    );
}

export default ControlPanel;
