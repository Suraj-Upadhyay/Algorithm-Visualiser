import './DataSizeSelector.css';
import Slider from '../Slider';

function DataSizeSelector() {
	return (
		<div className='DataSizeSelector'>
			<p>Maximum Data</p>
			<div>
				<Slider>
				</Slider>
			</div>
		</div>
	)
}
export default DataSizeSelector;
