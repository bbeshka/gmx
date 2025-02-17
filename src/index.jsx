import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "./styleall.css";
import "./style/styleall.css";
import "./style/adaptive.css";
import "./style/textsize.css";
import Container from "./Container";

const root = createRoot(document.getElementById("root"));
root.render(
	<StrictMode>
		<Container></Container>
	</StrictMode>
);
