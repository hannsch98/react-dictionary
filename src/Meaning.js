import React from "react";
import "./Meaning.css";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
	let meaningData = props.data;

	return (
		<div className="Meaning">
			<h2>{meaningData.partOfSpeech}</h2>
			{meaningData.definitions.map(function (definition, index) {
				if (definition.example) {
					return (
						<div key={index} className="definitions">
							<div className="definition">{definition.definition}</div>
							<div className="example">"{definition.example}"</div>
							<Synonyms data={definition.synonyms} />
						</div>
					);
				} else {
					return (
						<div key={index} className="definitions">
							<div className="definition">{definition.definition}</div>
							<Synonyms data={definition.synonyms} />
						</div>
					);
				}
			})}
		</div>
	);
}
