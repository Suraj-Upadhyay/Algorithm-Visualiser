import './DataLengthSelector.css';
import Slider from '../Slider';

function DataLengthSelector() {
	return (
		<div className='DataLengthSelector'>
			<p>Generate Data</p>
			<div>
				<Slider>
				</Slider>
			</div>
		</div>
	)
}

export default DataLengthSelector;
