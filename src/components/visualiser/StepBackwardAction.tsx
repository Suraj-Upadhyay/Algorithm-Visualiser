import "./StepBackwardAction.css";

interface IStepBackwardActionParams {
  googleIcon: string;
  onPlayControlAction: (event: React.MouseEvent<HTMLDivElement>) => void;
}

function StepBackwardAction(props: IStepBackwardActionParams) {
  return (
    <div className="StepBackwardAction" onClick={props.onPlayControlAction}>
      <span className="material-symbols-outlined">{props.googleIcon}</span>
    </div>
  );
}

export default StepBackwardAction;
