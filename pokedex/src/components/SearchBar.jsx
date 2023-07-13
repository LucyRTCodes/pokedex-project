import { useState } from "react";

function SearchBar({ setGroup, setNewPokemon }) {
	const [input, setInput] = useState(null);
	console.log(input);
	return (
		<form
			id="search-bar"
			onSubmit={(e) => {
				e.preventDefault();
				if (!input.length) {
					return (
						<p
							style={{
								position: "fixed",
								top: 300,
								left: 750,
								background: "red",
								color: "white",
								fontSize: 20,
								padding: 10,
								borderRadius: 20,
							}}
						>
							Enter a pokemon
						</p>
					);
				}
				setGroup("individual");
				setNewPokemon(input);
				setInput("");
			}}
		>
			<label htmlFor="search-box"></label>
			<input
				id="search-box"
				value={input}
				onChange={(e) => {
					setInput(e.target.value);
				}}
			></input>
			<button>Catch!</button>
		</form>
	);
}

export default SearchBar;
