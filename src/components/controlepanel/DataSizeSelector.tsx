import "./DataSizeSelector.css";
import Slider from "./Slider";

interface IDataSizeSelectorParams {
  minDataSize: number;
  maxDataSize: number;
  defaultDataSize: number;
  step: number;
  onDataSizeChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function DataSizeSelector(props: IDataSizeSelectorParams) {
  return (
    <div className="DataSizeSelector">
      <p>Maximum Data</p>
      <div>
        <span className="minData">{props.minDataSize}</span>
        <span className="maxData">{props.maxDataSize}</span>
        <Slider
          minData={props.minDataSize}
          maxData={props.maxDataSize}
          step={props.step}
          defaultData={props.defaultDataSize}
          onDataChange={props.onDataSizeChange}
        />
      </div>
    </div>
  );
}
export default DataSizeSelector;
