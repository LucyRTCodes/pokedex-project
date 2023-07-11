import { useState, useEffect } from "react";
import fetchApi from "../fetchApi";
import { MdHeight } from "react-icons/md";
import { FaWeightHanging } from "react-icons/fa";

function Pokemon({ pokemon, chosen }) {
	const pokemonName = pokemon.pokemon ? pokemon.pokemon.name : pokemon.name;
	const [isLoading, setIsLoading] = useState(true);
	const [info, setInfo] = useState(pokemonName);
	const [direction, setDirection] = useState("front");
	const [additional, setAdditional] = useState("collapsed");

	useEffect(() => {
		fetchApi(chosen, pokemonName).then((pokemon) => {
			setInfo(pokemon);
			setIsLoading(false);
		});
	}, [pokemon]);

	if (isLoading) {
		return <p>Loading...</p>;
	}
	const { name, sprites, types, height, weight, species } = info;
	let src =
		direction === "front" ? sprites.front_default : sprites.back_default;
	return (
		<li>
			<section className="factFile">
				<h2
					className={`pokemonName ${chosen ? chosen : types[0].type.name}`}
					onClick={(e) => {
						additional === "collapsed"
							? setAdditional("expanded")
							: setAdditional("collapsed");
					}}
				>
					{name[0].toUpperCase() + name.slice(1)}
				</h2>
				<img
					onClick={(e) => {
						setDirection(direction === "front" ? "back" : "front");
					}}
					src={src}
					alt={`${pokemonName}'s ${direction}`}
				/>

				<div
					className={`additional-info ${additional} ${
						chosen ? chosen : types[0].type.name
					}`}
				>
					<div id="additional-types">
						<p>
							Additional
							{types.length > 1 ? " Types" : " Type"}
						</p>
						<strong>
							<p id="types">
								{types.length === 1
									? types.map(
											(type) =>
												type.type.name[0].toUpperCase() +
												type.type.name.slice(1)
									  )
									: types
											.map(
												(type) =>
													type.type.name[0].toUpperCase() +
													type.type.name.slice(1)
											)
											.filter((type) => type !== chosen)
											.join(", ")}
							</p>
						</strong>
					</div>
					<div>
						<p>Species</p>
						<strong>
							<p id="species">
								{species.name[0].toUpperCase() + species.name.slice(1)}
							</p>
						</strong>
					</div>
					<div>
						<p>Height</p>

						<strong>
							<p id="height">
								<b>
									<MdHeight />
								</b>

								{` ${height}`}
							</p>
						</strong>
					</div>
					<div>
						<p>Weight</p>
						<strong>
							<p id="weight">
								<FaWeightHanging />
								{` ${weight}`}
							</p>
						</strong>
					</div>
				</div>
			</section>
		</li>
	);
}

export default Pokemon;
