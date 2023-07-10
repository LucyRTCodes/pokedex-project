import { useState, useEffect } from "react";
import fetchApi from "../fetchApi";

function Pokemon({ pokemon, type }) {
	const pokemonName = pokemon.pokemon ? pokemon.pokemon.name : pokemon.name;
	const [isLoading, setIsLoading] = useState(true);
	const [info, setInfo] = useState(pokemonName);
	const [direction, setDirection] = useState(true);

	useEffect(() => {
		fetchApi(type, pokemonName).then((pokemon) => {
			setInfo(pokemon);
			setIsLoading(false);
		});
	}, [pokemon]);

	if (isLoading) {
		return <p>Loading...</p>;
	}

	let src = info.sprites.front_default;
	if (direction === true) {
		src = info.sprites.front_default;
	} else {
		src = info.sprites.back_default;
	}
	return (
		<li>
			<div className="factFile">
				<h2>{pokemonName}</h2>
				<img
					onClick={(e) => {
						setDirection(!direction);
					}}
					src={src}
				/>
			</div>
		</li>
	);
}

export default Pokemon;
