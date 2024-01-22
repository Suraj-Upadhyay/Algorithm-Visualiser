import "./Visualiser.css";
import {useState} from 'react';
import {PlayControl, DataView} from './components';

function Visualiser(props) {
    const googleIconTexts = {
        'play': 'play_circle',
        'pause': 'pause',
        'forward': 'arrow_forward_ios',
        'backward': 'arrow_back_ios'
    };
    const [isPlaying, setIsPlaying] = useState(false);
    const [stepNumber, setStepNumber] = useState(0);

    const onPlayControlAction = (event) => {
        const actionItemClicked = event.target.textContent;
        switch(actionItemClicked) {
            case googleIconTexts.play:
                setIsPlaying(true);
                break;
            case googleIconTexts.pause:
                setIsPlaying(false);
                break;
            case googleIconTexts.forward:
                var newStepNumber = stepNumber + 1;
                setStepNumber(newStepNumber);
                break;
            case googleIconTexts.backward:
                var newStepNumber = stepNumber - 1;
                setStepNumber(newStepNumber);
                break;
        }
    };

    return (
        <div className="Visualiser">
            <div className="PlayControlContainer">
                <PlayControl
                    googleIconText={googleIconTexts}
                    onPlayControlAction={onPlayControlAction}
                />
            </div>
            <div className="DataViewContainer">
                <DataView
                    isPlaying={isPlaying}
                    dataBars={props.dataBars}
                    dataSpread={props.dataSpread}
                    animationTime={props.animationTime}
                    algoUsed={props.algoUsed}
                    stepNumber={stepNumber}
                />
            </div>
        </div>
    );
}

export default Visualiser;
