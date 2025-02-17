import Links from "../3_fich/links";
import Slide from "../3_fich/slide";

function Maincont(props) {
	return (
		<div className="maincont spac">
			<Slide e={props.e}></Slide>
			<Links l={props.l}></Links>
		</div>
	);
}

export default Maincont;
