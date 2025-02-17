function Links(props) {
	let a = props.l.map((e, index) => (
		<div className="sociallink" key={index}>
			<a href={e.link} target="_blank" rel="noopener noreferrer">
				<img src={e.svg} alt={e.alt} />
			</a>
		</div>
	));
	return (
		<div className="links">
			<h1>Follow us</h1>
			{a}
			<div className="hash">
				<input className="IsCopy" type="text" defaultValue={111} />
				<button className="ToCopy">copy</button>
			</div>
		</div>
	);
}

export default Links;
