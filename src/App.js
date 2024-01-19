import './App.css';
import ControlPanel from './components/controlepanel';
import Visualiser from './components/visualiser';

function App() {
  return (
    <div id="AppBody">
      <div id="AppHeader">
        <div id="MyProfile">
          <a href="github.com/Suraj-Upadhyay">github.com/Suraj-Upadhyay</a>
        </div>
        <div id="Title">
          Algorithm Visualiser
        </div>
      </div>
      <div id="AppContent">
        <div className="ControlPanelContainer">
          <ControlPanel />
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
