import Slidebar from "../3_fich/slidebar";

function Navbar(props) {
	return (
		<div className="navbar spac">
			<Slidebar e={props.e}></Slidebar>
		</div>
	);
}

export default Navbar;
