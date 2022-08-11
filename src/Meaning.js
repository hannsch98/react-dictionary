import React from "react";
import "./Meaning.css";

export default function Meaning(props) {
	let meaningData = props.data;

	return (
		<div className="Meaning">
			<h2>{meaningData.partOfSpeech}</h2>
			{meaningData.definitions.map(function (definition, index) {
				return (
					<div key={index}>
						<p>{definition.definition}</p>
						<em>{definition.example}</em>
					</div>
				);
			})}
		</div>
	);
}
