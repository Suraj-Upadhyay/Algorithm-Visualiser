import React from 'react';
import './PlayPauseButton.css';

function PlayPauseButton(props) {
  return (
    <div className='PlayPauseButton' onClick={props.onPlayControlAction}>
      {props.isPlaying ? (
        <span className="material-symbols-outlined">Pause Icon</span>
      ) : (
        <span className="material-symbols-outlined">Play Icon</span>
      )}
    </div>
  );
}

export default PlayPauseButton;
