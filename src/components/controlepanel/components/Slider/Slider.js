import './Slider.css';

function Slider(props) {
	const minData = props.minData;
	const maxData = props.maxData;
	const defaultData = props.defaultData;
	const data = props.data;
	const onDataChange = props.onDataChange;

	let value = data ? data : defaultData;
	return (
		<div className='Slider'>
			<input type="range" min={minData}
			 max={maxData} step='1' className='slider'
			 defaultValue={defaultData} id='myslider'/>
		</div>
	)
}

export default Slider;
