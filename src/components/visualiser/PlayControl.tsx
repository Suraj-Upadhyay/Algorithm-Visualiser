import "./PlayControl.css";
import PauseAction from "./PauseAction";
import PlayAction from "./PlayAction";
import StepBackwardAction from "./StepBackwardAction";
import StepForwardAction from "./StepForwardAction";
import { IGoogleIconTexts } from "../../assets/constants";

interface IPlayControlParams {
  googleIconText: IGoogleIconTexts;
  onPlayControlAction: (event: React.MouseEvent<HTMLDivElement>) => void;
}

function PlayControl(props: IPlayControlParams) {
  return (
    <div className="PlayControl">
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
  );
}

export default PlayControl;
