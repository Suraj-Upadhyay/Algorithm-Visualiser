import './App.css';
import { useState } from 'react';
import { ControlPanel, Visualiser } from './components';
import * as constants from './constants';

function App() {

  const [dataBars, setDataBars] = useState(constants.DEFAULTDATABARS);
  const [animationTime, setAnimationTime] = useState(constants.DEFAULTTIME);
  const [dataSpread, setDataSpread] = useState(constants.DEFAULTDATASPREAD);
  const [algoUsed, setAlgoUsed] = useState('');

  const onDataBarsChange = (event) => {
    console.log(event);
  };
  const onAnimationTimeChange = (event) => {
      console.log(event);
  };
  const onDataSpreadChange = (event) => {
    console.log(event);
  };
  const onAlgoUsedChange = (event) => {
    console.log(event);
  };

  return (
    <div id="AppBody">
      <div id="AppHeader">
        <div id="MyProfile">
          <a href="https://github.com/Suraj-Upadhyay" target="_blank">github.com/Suraj-Upadhyay</a>
        </div>
        <div id="Title">
          Algorithm Visualiser
        </div>
      </div>
      <div id="AppContent">
        <div className="ControlPanelContainer">
          <ControlPanel
            constants={constants.controlPanelConstants}
            dataBars={dataBars}
            animationTime={animationTime}
            dataSpread={dataSpread}
            algoUsed={algoUsed}
            onDataBarsChange={()=>onDataBarsChange}
            onAnimationTimeChange={()=>onAnimationTimeChange}
            onDataSpreadChange={()=>onDataSpreadChange}
            onAlgoUsedChange={()=>onAlgoUsedChange}/>
        </div>
        <div className="VisualiserContainer">
          <Visualiser />
        </div>
      </div>
      <div id="AppFooter">
        <div id="CopyRight">
          © Copyright 2024
        </div>
      </div>
    </div>
  );
}

export default App;
