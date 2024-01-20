import "./ControlPanel.css";
import { AlgorithmSelector,
         DataLengthSelector,
         DataSizeSelector,
         TimeLengthSelector }
from "./components";

function ControlPanel(props) {
    return (
        <div className="ControlPanel">
            <div>
                <AlgorithmSelector/>
            </div>
            <div>
                <DataLengthSelector/>
            </div>
            <div>
                <TimeLengthSelector/>
            </div>
             <div>
                <DataSizeSelector/>
            </div>
        </div>
    );
}

export default ControlPanel;
