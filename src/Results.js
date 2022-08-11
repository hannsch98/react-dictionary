import React from "react";
import Meaning from "./Meaning";
import "./Results.css";

export default function Results(props) {
	let resultData = props.data;

	if (resultData) {
		return (
			<div className="Results">
				<h1>{resultData.word}</h1>
				{resultData.meanings.map(function (meaning, index) {
					return (
						<div key={index}>
							<Meaning data={meaning} />
						</div>
					);
				})}
			</div>
		);
	} else {
		return null;
	}
}
