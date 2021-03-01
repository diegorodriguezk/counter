import React from "react";
import propTypes from "prop-types";

const Counter = props => {
	const icon = <i className="far fa-clock"> </i>;
	const placeholder = "0000";
	let seconds = props.seconds;
	let output =
		placeholder
			.split("")
			.slice(seconds.lenght)
			.join("") + seconds;

	output = output.split("");
	output.unshift(icon);

	var n = output.map(function(el, index) {
		return (
			<div
				style={{ width: 40, backgroundColor: "black", color: "white" }}
				key={index}>
				{el}{" "}
			</div>
		);
		n;
	});

	return (
		<div className="container-sm">
			<div style={{ display: "flex" }}> {n} </div>
		</div>
	);
};

Counter.propTypes = {
	seconds: propTypes.string
};

export default Counter;
