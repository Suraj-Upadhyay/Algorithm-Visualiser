import './TimeLengthSelector.css';
import Slider from '../Slider';

function TimeLengthSelector() {
	return (
		<div className='TimeLengthSelector'>
			<p>Animation Time</p>
			<div>
				<span className="minData">5</span>
				<span className="maxData">100</span>
				<Slider></Slider>
			</div>
		</div>
	)
}

export default TimeLengthSelector;
