import "./DataSizeSelector.css";
import Slider from "./Slider";

function DataSizeSelector(props) {
  return (
    <div className="DataSizeSelector">
      <p>Maximum Data</p>
      <div>
        <span className="minData">
          {props.minDataSize}
        </span>
        <span className="maxData">
          {props.maxDataSize}
        </span>
        <Slider
          minData={props.minDataSize}
          maxData={props.maxDataSize}
          defaultData={props.defaultDataSize}
          onDataChange={props.onDataSizeChange}
        />
      </div>
    </div>
  );
}
export default DataSizeSelector;
