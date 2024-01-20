import './Slider.css';

function Slider() {
	return (
		<div className='Slider'>
			<input type="range" min='5'
			 max='100' step='1' calss='slider'
			 id='myslider'/>
		</div>
	)
}

export default Slider;
