import './DataSizeSelector.css';
import Slider from '../Slider';

function DataSizeSelector() {
	return (
		<div className='DataSizeSelector'>
			<p>Maximum Data</p>
			<div>
				<span className="minData">5</span>
				<span className="maxData">100</span>
				<Slider></Slider>
			</div>
		</div>
	)
}
export default DataSizeSelector;
