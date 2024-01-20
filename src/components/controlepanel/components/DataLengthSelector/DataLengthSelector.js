import './DataLengthSelector.css';
import Slider from '../Slider';

function DataLengthSelector() {
	return (
		<div className='DataLengthSelector'>
			<p>Generate Data</p>
			<div>
				<span className="minData">5</span>
				<span className="maxData">100</span>
				<Slider></Slider>
			</div>
		</div>
	)
}

export default DataLengthSelector;
