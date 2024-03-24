import "./App.css";
import { useState } from "react";
import { ControlPanel, Visualiser } from "./components";
import * as constants from "./assets/constants";

function App() {
  const [dataBars, setDataBars] = useState<number>(constants.DEFAULTDATABARS);
  const [animationTime, setAnimationTime] = useState<number>(constants.DEFAULTTIME);
  const [dataSpread, setDataSpread] = useState<number>(constants.DEFAULTDATASPREAD);
  const [playing, setPlaying] = useState<boolean>(false);
  const [algoUsed, setAlgoUsed] = useState<string>("None");

  const onDataBarsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newDataBarValue = +event.target.value;
    newDataBarValue && setDataBars(newDataBarValue);
  };

  const onAnimationTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newAnimationTime = +event.target.value;
    newAnimationTime && setAnimationTime(newAnimationTime);
  };

  const onDataSpreadChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSpreadChange = +event.target.value;
    newSpreadChange && setDataSpread(newSpreadChange);
  };

  const onAlgoUsedChange = (event: React.MouseEvent<HTMLLIElement>) => {
    let newAlgoUsed = (event.target as HTMLLIElement).textContent;
    newAlgoUsed = newAlgoUsed === "None" ? "None" : newAlgoUsed;
    if (newAlgoUsed && (constants.ALGO_IMPLEMENTATION_LIST[newAlgoUsed] || newAlgoUsed === "None"))
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
