import { useEffect, useState } from "react";
import Pokemon from "./Pokemon";
import PreviousButton from "./PreviousButton";
import NextButton from "./NextButton";
import fetchApi from "../fetchApi";

function PokemonList({ type }) {
	const [pokemonList, setPokemonList] = useState([]);
	// const [isLoading, setIsLoading] = useState(true);
	const [start, setStart] = useState(0);
	// const [end, setEnd] = useState(20);

	useEffect(() => {
		fetchApi(type).then(({ pokemon, results }) => {
			setPokemonList(type ? pokemon : results);
			setStart(0);
			// setIsLoading(false);
		});
	}, [type]);

	// 	if (isLoading) return <p>Loading...</p>;
	return (
		<>
			<ul>
				<h2 id="pokemon-type">{type ? type.toUpperCase() : "ALL"} POKEMON</h2>
				<div className="list">
					{pokemonList.slice(start, start + 20).map((pokemon, index) => {
						return <Pokemon key={index} pokemon={pokemon} chosen={type} />;
					})}
				</div>
			</ul>
			<PreviousButton setStart={setStart} />
			<NextButton setStart={setStart} pokemonList={pokemonList} />
		</>
	);
}

export default PokemonList;
