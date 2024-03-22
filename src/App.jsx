import "./App.css";
import { useState } from "react";
import { ControlPanel, Visualiser } from "./components";
import * as constants from "./assets/constants";

function App() {
  const [dataBars, setDataBars] = useState(constants.DEFAULTDATABARS);
  const [animationTime, setAnimationTime] = useState(constants.DEFAULTTIME);
  const [dataSpread, setDataSpread] = useState(constants.DEFAULTDATASPREAD);
  const [playing, setPlaying] = useState(false);
  const [algoUsed, setAlgoUsed] = useState("");
  const [algoDone, setAlgoDone] = useState(false);

  const onDataBarsChange = event => {
    setDataBars(event.target.value);
  };

  const onAnimationTimeChange = event => {
    setAnimationTime(event.target.value);
  };

  const onDataSpreadChange = event => {
    setDataSpread(event.target.value);
  };

  const onAlgoDoneChange = () => {
    let newAlgoDone = !algoDone;
    setAlgoDone(newAlgoDone);
  };

  const onAlgoUsedChange = event => {
    let newAlgoUsed = event.target.textContent;
    newAlgoUsed = newAlgoUsed === "None" ? "" : newAlgoUsed;
    setAlgoUsed(newAlgoUsed);
  };

  return (
    <div id="AppBody">
      <div id="AppHeader">
        <div id="MyProfile">
          <a
            href="https://github.com/Suraj-Upadhyay"
            target="_blank"
            rel="noreferrer"
          >
            github.com/Suraj-Upadhyay
          </a>
        </div>
        <div id="Title">Algorithm Visualiser</div>
      </div>
      <div id="AppContent">
        <div className="ControlPanelContainer">
          <ControlPanel
            constants={constants.controlPanelConstants}
            algoUsed={algoUsed}
            algoDone={algoDone}
            playing={playing}
            onDataBarsChange={onDataBarsChange}
            onAnimationTimeChange={onAnimationTimeChange}
            onDataSpreadChange={onDataSpreadChange}
            onAlgoUsedChange={onAlgoUsedChange}
          />
        </div>
        <div className="VisualiserContainer">
          <Visualiser
            dataBars={dataBars}
            animationTime={animationTime}
            dataSpread={dataSpread}
            algoUsed={algoUsed}
            onAlgoDoneChange={onAlgoDoneChange}
            setPlaying={setPlaying}
          />
        </div>
      </div>
      <div id="AppFooter">
        <div id="CopyRight">© Copyright 2024</div>
      </div>
    </div>
  );
}

export default App;
