import './TimeLengthSelector.css';
import Slider from '../Slider';

function TimeLengthSelector() {
	return (
		<div className='TimeLengthSelector'>
			<p>Animation Time</p>
			<div>
				<Slider>
				</Slider>
			</div>
		</div>
	)
}

export default TimeLengthSelector;
