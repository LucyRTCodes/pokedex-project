import { useState } from "react";

function SearchBar({ setGroup, setNewPokemon }) {
	const [input, setInput] = useState(null);
	console.log(input);
	return (
		<form
			id="search-bar"
			onSubmit={(e) => {
				e.preventDefault();
				setGroup("individual");
				setNewPokemon(input);
				setInput("");
			}}
		>
			<label htmlFor="search-box"></label>
			<input
				id="search-box"
				onChange={(e) => {
					setInput(e.target.value);
				}}
			></input>
			<button>Catch!</button>
		</form>
	);
}

export default SearchBar;
