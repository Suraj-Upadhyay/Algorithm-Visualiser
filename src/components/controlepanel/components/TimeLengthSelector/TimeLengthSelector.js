import './TimeLengthSelector.css';
import Slider from '../Slider';

function TimeLengthSelector(props) {
	return (
		<div className='TimeLengthSelector'>
			<p>Animation Time</p>
			<div>
				<span className="minData">{props.minTime}</span>
				<span className="maxData">{props.maxTime}</span>
				<Slider
					minData={props.minTime}
					maxData={props.maxTime}
					defaultData={props.defaultTime}
					data={props.animationTime}
					onDataChange={props.onAnimationTimeChange}
				/>
			</div>
		</div>
	)
}

export default TimeLengthSelector;
