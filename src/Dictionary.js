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
			<div className="row">
				<div className="col-4">
					<form className="search-form">
						<label htmlFor="search-input" id="search-label">
							Type your search here:
						</label>
						<input
							type="search"
							autoFocus="on"
							autoComplete="off"
							placeholder="Example: Waterfall"
							onChange={handleKeywordChange}
							id="search-input"
						/>
						<br />
						<button className="btn btn-primary search-btn" onClick={search}>
							Search
						</button>
					</form>
				</div>
				<div className="col-8 search-results">
					<Results data={results} />
				</div>
			</div>
		</div>
	);
}
