import './StepBackwardAction.css';

function StepBackwardAction(props) {
	return (
		<div className='StepBackwardAction' onClick={props.onPlayControlAction}>
			<span className="material-symbols-outlined">{props.googleIcon}</span>
		</div>
	);
}

export default StepBackwardAction;
