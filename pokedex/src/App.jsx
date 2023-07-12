import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import PokemonList from "./components/PokemonList";
import Buttons from "./components/Buttons";
import SearchBar from "./components/SearchBar";
import Individual from "./components/Individual";

function App() {
	const [group, setGroup] = useState("group");
	const [type, setType] = useState(null);
	const [newPokemon, setNewPokemon] = useState(null);

	if (group === "group") {
		return (
			<>
				<Header />
				<Buttons setGroup={setGroup} setType={setType} />
				<SearchBar
					setNewPokemon={setNewPokemon}
					setGroup={setGroup}
					setType={setType}
				/>
				<PokemonList type={type} />
			</>
		);
	} else {
		return (
			<>
				<Header />
				<Buttons setGroup={setGroup} setType={setType} />
				<SearchBar
					setNewPokemon={setNewPokemon}
					setGroup={setGroup}
					setType={setType}
				/>
				<Individual newPokemon={newPokemon} />
			</>
		);
	}
}
export default App;
