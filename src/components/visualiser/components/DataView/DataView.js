import './DataView.css';
import DataBar from './components';

function DataView(props) {
    const dataBars = props.dataBars;
    const dataSpread = props.dataSpread;
    const animationTime = props.animationTime;
    const algoUsed = props.algoUsed;
		const isPlaying = props.isPlaying;
		const stepNumber = props.stepNumber;

	return (
		<div className='DataView'>
			<DataBar></DataBar>
			<DataBar></DataBar>
			<DataBar></DataBar>
			<DataBar></DataBar>
			<DataBar></DataBar>
			<DataBar></DataBar>
		</div>
	)
}

export default DataView;
