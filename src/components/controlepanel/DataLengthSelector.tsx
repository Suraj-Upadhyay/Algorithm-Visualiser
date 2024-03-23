import "./DataLengthSelector.css";
import Slider from "./Slider";

interface IDataLengthSelectorParams {
  minDataBars: number,
  maxDataBars: number,
  defaultDataBars: number,
  onDataBarsChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

function DataLengthSelector(props: IDataLengthSelectorParams) {
  return (
    <div className="DataLengthSelector">
      <p>Generate Data</p>
      <div>
        <span className="minData">
          {props.minDataBars}
        </span>
        <span className="maxData">
          {props.maxDataBars}
        </span>
        <Slider
          minData={props.minDataBars}
          maxData={props.maxDataBars}
          defaultData={props.defaultDataBars}
          onDataChange={props.onDataBarsChange}
        />
      </div>
    </div>
  );
}

export default DataLengthSelector;
