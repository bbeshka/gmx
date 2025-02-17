function Blog(props) {
	let e = props.e.map((e, index) => <p key={index + "z"}>{e}</p>);
	return <div className={props.n}>{e}</div>;
}

export default Blog;
