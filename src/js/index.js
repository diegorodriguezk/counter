//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
//import { Home } from "./component/home.js";
import Counter from "./component/counter";

var n = 0;

setInterval(function() {
	ReactDOM.render(
		<Counter seconds={n.toString()} />,
		document.querySelector("#app")
	);
	n++;
}, 1000);

//render your react application
// import { CounterUseState } from "./component/CounterUseState";

// ReactDOM.render(<CounterUseState />, document.querySelector("#app"));
