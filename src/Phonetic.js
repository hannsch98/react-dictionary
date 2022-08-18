import React from "react";

export default function Phonetic(props) {
	if (props.data.audio === "") {
		return (
			<div className="Phonetic">
				<p>{props.data.text}</p>
			</div>
		);
	} else {
		return (
			<div className="Phonetic">
				<p>
					<a href={props.data.audio} target="_blank" rel="noreferrer">
						<i className="fa-solid fa-volume-high"></i> Listen
					</a>
				</p>
				<p>{props.data.text}</p>
			</div>
		);
	}
}
