import './DataLengthSelector.css';
import Slider from '../Slider';

function DataLengthSelector(props) {
	return (
		<div className='DataLengthSelector'>
			<p>Generate Data</p>
			<div>
				<span className="minData">{props.minDataBars}</span>
				<span className="maxData">{props.maxDataBars}</span>
				<Slider
					minData={props.minDataBars}
					maxData={props.maxDataBars}
					defaultData={props.defaultDataBars}
					data={props.dataBars}
					onDataChange={props.onDataBarsChange}
				/>
			</div>
		</div>
	)
}

export default DataLengthSelector;
