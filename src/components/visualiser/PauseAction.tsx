import "./PauseAction.css";

interface IPauseActionParams {
  googleIcon: string;
  onPlayControlAction: (event: React.MouseEvent<HTMLDivElement>) => void;
}

function PauseAction(props: IPauseActionParams) {
  return (
    <div className="PauseAction" onClick={props.onPlayControlAction}>
      <span className="material-symbols-outlined">{props.googleIcon}</span>
    </div>
  );
}

export default PauseAction;
