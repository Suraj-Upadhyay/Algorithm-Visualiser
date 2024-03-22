import "./StepForwardAction.css";

function StepForwardAction(props) {
  return (
    <div className="StepForwardAction" onClick={props.onPlayControlAction}>
      <span className="material-symbols-outlined">
        {props.googleIcon}
      </span>
    </div>
  );
}

export default StepForwardAction;
