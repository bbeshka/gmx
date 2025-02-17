import { useState } from "react";
import { blog } from "./components/2_ent/blogType";

import { svg } from "./components/2_ent/svgType";
import Copyryght from "./components/4_wigets/copyryght";
import Maincont from "./components/4_wigets/maincont";
import Navbar from "./components/4_wigets/navbar";

function Container() {
	// const [] = useState;
	return (
		<div className="containe">
			<Navbar e={blog}></Navbar>
			<Maincont e={blog} l={svg}></Maincont>
			<Copyryght></Copyryght>
		</div>
	);
}

export default Container;
