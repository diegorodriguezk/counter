import React, { useState, useEffect } from "react";
import { Button } from "bootstrap";

export function CounterUseState() {
	const [counter, number] = useState(0);
	useEffect(() => {
		console.log("counter cambio");
	}, [counter]);

	return (
		<div>
			<p>{counter}</p>
			<button onClick={() => number(counter + 1)}> counter + 1 </button>
		</div>
	);
}
