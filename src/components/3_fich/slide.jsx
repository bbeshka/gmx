import Blog from "../1_sahred/blog";
import Pictur from "../1_sahred/picture";

function Slide(props) {
	let ful = props.e.map((e, index) => (
		<div
			className={index == 0 ? "carousel-item active" : "carousel-item"}
			key={index}>
			<div className="gride">
				{e.img != undefined && <Pictur e={e.img}></Pictur>}
				{e.blog != undefined && (
					<Blog e={e.blog} n={e.img != undefined ? "odin" : "dva1"}></Blog>
				)}
				{e.vlog != undefined && <Blog e={e.vlog} n="dva"></Blog>}
			</div>
		</div>
	));
	let indik = props.e.map((e, index) => (
		<button
			key={index}
			type="button"
			data-bs-target="#carouselExampleIndicators"
			data-bs-slide-to={index}
			className={(index == 0 && "active") || ""}
			aria-current={(index == 0 && "true") || "false"}
			aria-label={"Slide " + (index + 1)}></button>
	));

	return (
		<div
			id="carouselExampleIndicators"
			className="carousel slide"
			data-bs-touch="false">
			<div className="carousel-indicators">{indik}</div>
			<div className="backgroundopacity"></div>
			<div className="carousel-inner">{ful}</div>
			<button
				className="carousel-control-prev"
				type="button"
				data-bs-target="#carouselExampleIndicators"
				data-bs-slide="prev">
				<span className="carousel-control-prev-icon" aria-hidden="true"></span>
				<span className="visually-hidden">Предыдущий</span>
			</button>
			<button
				className="carousel-control-next"
				type="button"
				data-bs-target="#carouselExampleIndicators"
				data-bs-slide="next">
				<span className="carousel-control-next-icon" aria-hidden="true"></span>
				<span className="visually-hidden">Следующий</span>
			</button>
		</div>
	);
}

export default Slide;
