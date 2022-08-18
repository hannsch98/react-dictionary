import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary(props) {
	let [keyword, setKeyword] = useState(props.default);
	let [results, setResults] = useState(null);
	let [loaded, setLoaded] = useState(false);
	let [photos, setPhotos] = useState(null);

	function search() {
		let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
		axios.get(apiUrl).then(handleDictionaryResponse);

		let pexelsApiKey =
			"563492ad6f9170000100000100d9cf6cae904a1a83d8cc651e63705b";
		let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
		let headers = { Authorization: `Bearer ${pexelsApiKey}` };
		axios
			.get(pexelsApiUrl, {
				headers: headers,
			})
			.then(handlePexelsResponse);
	}

	function handleSubmit(event) {
		event.preventDefault();
		search();
	}

	function handleDictionaryResponse(response) {
		setResults(response.data[0]);
	}

	function handlePexelsResponse(response) {
		setPhotos(response.data.photos);
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
								What are you looking for?
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
						<Photos data={photos} />
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
