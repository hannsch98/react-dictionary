import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";

export default function Dictionary() {
	let [keyword, setKeyword] = useState(null);
	let [results, setResults] = useState(null);

	function search(event) {
		event.preventDefault();

		let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;

		axios.get(apiUrl).then(handleResponse);
	}

	function handleResponse(response) {
		console.log(response.data[0]);
		//console.log(response.data[0].meanings[0].definitions[0].definition);
		setResults(response.data[0]);
	}

	function handleKeywordChange(event) {
		setKeyword(event.target.value);
	}

	return (
		<div className="Dictionary">
			<form>
				<input
					type="search"
					autoFocus="on"
					autoComplete="off"
					onChange={handleKeywordChange}
				/>
				<br />
				<button className="btn btn-primary search-btn" onClick={search}>
					Search
				</button>
			</form>
			<Results data={results} />
		</div>
	);
}
