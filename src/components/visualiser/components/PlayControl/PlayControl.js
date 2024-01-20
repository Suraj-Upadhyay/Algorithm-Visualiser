import './PlayControl.css';
import { PauseAction, PlayAction,
 		 StepForwardAction,
		 StepBackwardAction}
from './components';

function PlayControl() {
	return (
		<div className='PlayControl'>
			<div>
				<PauseAction/>
			</div>
			<div>
				<PlayAction/>
			</div>
			<div>
				<StepForwardAction/>
			</div>
			<div>
				<StepBackwardAction/>
			</div>
		</div>
	)
}

export default PlayControl;
