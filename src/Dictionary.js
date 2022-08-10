import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
	let [keyword, setKeyword] = useState(null);

	function search(event) {
		event.preventDefault();
		alert(keyword);
	}

	function handleKeywordChange(event) {
		setKeyword(event.target.value);
	}

	return (
		<div className="Dictionary">
			<h1>Hello from Dictionary</h1>
			<form onSubmit={search}>
				<input
					type="search"
					autofocus="on"
					autoComplete="off"
					onChange={handleKeywordChange}
				/>
				<br />
				<button className="btn btn-primary">Search</button>
			</form>
		</div>
	);
}
