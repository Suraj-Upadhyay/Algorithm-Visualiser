import { useEffect, useState } from 'react';
import './DataView.css';
import DataBar from './components';

function DataView(props) {
	const data = props.data;
	const dataLength = props.dataLength;
	const maxData = props.maxData;
	const [height, setHeight] = useState(0);
	let gridColumnString = 'auto '.repeat(dataLength)

	useEffect(()=>{
		setHeight(document.querySelector(".DataView").offsetHeight);
	}, []);

	return (
		<div className='DataView' style={{gridTemplateColumns: gridColumnString}}>
			{data.map((item, index) =>
				(<DataBar
					key={index}
					data={item.data}
					index={item.index}
					dataLength={dataLength}
					maxData={maxData}
					parentHeight={height}
				/>)
			)}
		</div>
	)
}

export default DataView;
