import "./Slider.css";

interface ISliderParams {
  minData: number,
  maxData: number,
  defaultData: number,
  onDataChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

function Slider(props: ISliderParams) {
  const minData = props.minData;
  const maxData = props.maxData;
  const defaultData = props.defaultData;
  const onDataChange = props.onDataChange;

  return (
    <div className="Slider">
      <input
        type="range"
        min={minData}
        max={maxData}
        step="1"
        className="slider"
        defaultValue={defaultData}
        id="myslider"
        onChange={onDataChange}
      />
    </div>
  );
}

export default Slider;
