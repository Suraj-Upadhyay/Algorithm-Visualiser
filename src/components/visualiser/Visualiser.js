import "./Visualiser.css";
import {PlayControl, DataView} from './components';

function Visualiser(props) {
    return (
        <div className="Visualiser">
            <div className="PlayControlContainer">
                <PlayControl />
            </div>
            <div className="DataViewContainer">
                <DataView />
            </div>
        </div>
    );
}

export default Visualiser;
