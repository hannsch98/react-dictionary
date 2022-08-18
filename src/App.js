import "./App.css";
import Dictionary from "./Dictionary";

function App() {
	return (
		<div className="App">
			<div className="container">
				<header className="App-header">Dictionary</header>
				<Dictionary default="dictionary" />
				<footer>
					<a
						href="https://github.com/hannsch98/react-dictionary"
						target="_blank"
						rel="noreferrer"
					>
						Open source code
					</a>{" "}
					by{" "}
					<a
						href="https://www.linkedin.com/in/hanna-schimek-998b561a7/"
						target="_blank"
						rel="noreferrer"
					>
						Hanna Schimek
					</a>
				</footer>
			</div>
		</div>
	);
}

export default App;
