import "./App.css";
import React, { useState } from "react";
import { ControlPanel, Visualiser } from "./components";
import * as constants from "./assets/constants";

function App(): JSX.Element {
  const [dataBars, setDataBars] = useState<number>(constants.DEFAULTDATABARS);
  const [animationTime, setAnimationTime] = useState<number>(
    constants.DEFAULTTIME,
  );
  const [dataSpread, setDataSpread] = useState<number>(
    constants.DEFAULTDATASPREAD,
  );
  const [playing, setPlaying] = useState<boolean>(false);
  const [algoUsed, setAlgoUsed] = useState<string>("None");

  const onDataBarsChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const newDataBarValue = +event.target.value;
    newDataBarValue !== null && setDataBars(newDataBarValue);
  };

  const onAnimationTimeChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    const newAnimationTime = +event.target.value;
    newAnimationTime !== null && setAnimationTime(newAnimationTime);
  };

  const onDataSpreadChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const newSpreadChange = +event.target.value;
    newSpreadChange !== null && setDataSpread(newSpreadChange);
  };

  const onAlgoUsedChange = (event: React.MouseEvent<HTMLLIElement>): void => {
    let newAlgoUsed = (event.target as HTMLLIElement).textContent;
    newAlgoUsed = newAlgoUsed === "None" ? "None" : newAlgoUsed;
    if (
      newAlgoUsed !== null &&
      (constants.ALGO_IMPLEMENTATION_LIST[newAlgoUsed] !== null ||
        newAlgoUsed === "None")
    )
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
