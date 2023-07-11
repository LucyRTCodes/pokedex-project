import { useState, useEffect } from "react";
import fetchApi from "../fetchApi";
import { MdHeight, MdAddCircle } from "react-icons/md";
import { FaWeightHanging } from "react-icons/fa";
import { GiMineExplosion } from "react-icons/gi";

function Pokemon({ pokemon, type }) {
	const pokemonName = pokemon.pokemon ? pokemon.pokemon.name : pokemon.name;
	const [isLoading, setIsLoading] = useState(true);
	const [info, setInfo] = useState(pokemonName);
	const [direction, setDirection] = useState("front");
	const [additional, setAdditional] = useState("collapsed");

	useEffect(() => {
		fetchApi(type, pokemonName).then((pokemon) => {
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
					className="pokemonName"
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

				<div className={`additional-info ${additional}`}>
					<div id="additional-types">
						<p>Additional type</p>
						<strong>
							<p id="types">
								<MdAddCircle size={20} />
								{types[1]
									? ` ${types[1].type.name[0].toUpperCase()}${types[1].type.name.slice(
											1
									  )}`
									: "None"}
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
