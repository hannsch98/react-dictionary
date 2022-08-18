import React from "react";
import "./Photos.css";

export default function Photos(props) {
	let photoResults = props.data;

	if (photoResults) {
		return (
			<section className="Photos">
				<div className="row">
					{photoResults.map(function (photo, index) {
						return (
							<div className="col-4" key={index}>
								<a href={photo.src.original} target="_blank" rel="noreferrer">
									<img
										src={photo.src.tiny}
										alt={photo.alt}
										className="img-fluid"
									/>
								</a>
							</div>
						);
					})}
				</div>
			</section>
		);
	} else {
		return null;
	}
}
