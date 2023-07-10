import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import PokemonList from "./components/PokemonList";
import Buttons from "./components/Buttons";

function App() {
	const [type, setType] = useState(null);

	return (
		<>
			<Header />
			<Buttons setType={setType} />
			<PokemonList type={type} />
		</>
	);
}
export default App;
