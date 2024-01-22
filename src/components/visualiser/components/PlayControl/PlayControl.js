import './PlayControl.css';
import { PauseAction, PlayAction,
 		 StepForwardAction,
		 StepBackwardAction}
from './components';

function PlayControl(props) {
	return (
		<div className='PlayControl'>
			<div>
				<PauseAction
					googleIcon={props.googleIconText.pause}
					onPlayControlAction={props.onPlayControlAction}
				/>
			</div>
			<div>
				<PlayAction
					googleIcon={props.googleIconText.play}
					onPlayControlAction={props.onPlayControlAction}
				/>
			</div>
			<div>
				<StepForwardAction
					googleIcon={props.googleIconText.forward}
					onPlayControlAction={props.onPlayControlAction}
				/>
			</div>
			<div>
				<StepBackwardAction
					googleIcon={props.googleIconText.backward}
					onPlayControlAction={props.onPlayControlAction}
				/>
			</div>
		</div>
	)
}

export default PlayControl;
