import "./StepForwardAction.css";

interface IStepForwardActionParams {
  googleIcon: string;
  onPlayControlAction: (event: React.MouseEvent<HTMLDivElement>) => void;
}

function StepForwardAction(props: IStepForwardActionParams) {
  return (
    <div className="StepForwardAction" onClick={props.onPlayControlAction}>
      <span className="material-symbols-outlined">{props.googleIcon}</span>
    </div>
  );
}

export default StepForwardAction;
