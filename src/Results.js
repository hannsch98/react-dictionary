import React from "react";
import Meaning from "./Meaning";
import "./Results.css";
import Phonetic from "./Phonetic";

export default function Results(props) {
	let resultData = props.data;

	if (resultData) {
		return (
			<div className="Results">
				<h1>{resultData.word}</h1>

				{resultData.phonetics.map(function (phonetic, index) {
					return (
						<div key={index}>
							<Phonetic data={phonetic} />
						</div>
					);
				})}

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
