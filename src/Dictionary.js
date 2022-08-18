import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";

export default function Dictionary(props) {
	let [keyword, setKeyword] = useState(props.default);
	let [results, setResults] = useState(null);
	let [loaded, setLoaded] = useState(false);

	function search() {
		let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;

		axios.get(apiUrl).then(handleResponse);
	}

	function handleSubmit(event) {
		event.preventDefault();
		search();
	}

	function handleResponse(response) {
		setResults(response.data[0]);
	}

	function handleKeywordChange(event) {
		setKeyword(event.target.value);
	}

	function load() {
		setLoaded(true);
		search();
	}

	if (loaded) {
		return (
			<div className="Dictionary">
				<div className="row">
					<div className="col-4">
						<form className="search-form">
							<label htmlFor="search-input" id="search-label">
								What do you want to search for?
							</label>
							<input
								type="search"
								onChange={handleKeywordChange}
								autoFocus="on"
								autoComplete="off"
								defaultValue={props.default}
								id="search-input"
							/>
							<br />
							<small>Example: waterfall, sunrise, clouds</small>
							<button
								className="btn btn-primary search-btn"
								onClick={handleSubmit}
							>
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
	} else {
		load();
		return "Loading...";
	}
}
