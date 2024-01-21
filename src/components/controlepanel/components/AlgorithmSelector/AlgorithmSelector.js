import './AlgorithmSelector.css';

function AlgorithmSelector(props) {
	const algoList = props.algoList;
	const algoUsed = props.algoUsed ? props.algoUsed : 'Select Aglorithm';
	const onAlgoUsedChange = props.onAlgoUsedChange;

	return (
		<div className='AlgorithmSelector'>
			<div className='DropDown'>
				<p>{algoUsed}</p>
				<div className='DropDownList'>
					<ul>
						{
							Object.keys(algoList).map(
								(item) => {
									console.log(item);
									return (<li>{item}</li>);
								}
							)
						}
					</ul>
				</div>
			</div>
		</div>
	)
}

export default AlgorithmSelector;
