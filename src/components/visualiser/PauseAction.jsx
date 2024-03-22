import "./PauseAction.css";

function PauseAction(props) {
  return (
    <div className="PauseAction" onClick={props.onPlayControlAction}>
      <span className="material-symbols-outlined">
        {props.googleIcon}
      </span>
    </div>
  );
}

export default PauseAction;
