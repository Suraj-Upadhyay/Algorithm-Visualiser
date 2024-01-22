import './PlayAction.css';

function PlayAction(props) {
	return (
		<div className='PlayAction' onClick={props.onPlayControlAction}>
			<span className="material-symbols-outlined">{props.googleIcon}</span>
		</div>
	);
}

export default PlayAction;
