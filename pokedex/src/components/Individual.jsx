import { useEffect, useState } from "react";
import { MdHeight, MdAddCircle } from "react-icons/md";
import { FaWeightHanging } from "react-icons/fa";
import { GiMineExplosion } from "react-icons/gi";

function Individual({ newPokemon }) {
	const [isLoading, setIsLoading] = useState(true);
	const [info, setInfo] = useState(null);
	const [direction, setDirection] = useState("front");
	const [additional, setAdditional] = useState("collapsed");

	useEffect(() => {
		fetch(`https://pokeapi.co/api/v2/pokemon/${newPokemon.toLowerCase()}`)
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				setInfo(data);
				setIsLoading(false);
			})
			.catch((err) => {
				return (
					<div
						style={{
							position: "fixed",
							top: 300,
							left: 750,
							background: "white",
							color: "black",
							fontSize: 20,
							padding: 10,
						}}
					>
						<Buttons setGroup={setGroup} setType={setType} />
						<p>404: Not Found</p>
					</div>
				);
			});
	}, [newPokemon]);

	if (isLoading)
		return (
			<p
				style={{
					position: "fixed",
					top: 300,
					left: 750,
					background: "white",
					color: "black",
					fontSize: 20,
					padding: 10,
				}}
			>
				Loading...
			</p>
		);
	const { name, sprites, types, height, weight, species, moves } = info;
	let src =
		direction === "front" ? sprites.front_default : sprites.back_default;

	return (
		<div>
			<section id="individual">
				<h2 className={types[0].type.name}>
					{name[0].toUpperCase() + name.slice(1)}
				</h2>
				<img
					onClick={(e) => {
						setDirection(direction === "front" ? "back" : "front");
					}}
					src={src}
					alt={`${name}'s ${direction}`}
				/>

				<div className={`additional-info ${types[0].type.name}`}>
					<div id="additional-types">
						<p>{types.length > 1 ? " Types" : " Type"}</p>
						<strong>
							<p id="types">
								{types
									.map(
										(type) =>
											type.type.name[0].toUpperCase() + type.type.name.slice(1)
									)
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
			<section>
				<h2
					id="moves-header"
					onClick={(e) => {
						additional === "collapsed"
							? setAdditional("expanded")
							: setAdditional("collapsed");
					}}
				>
					<GiMineExplosion />
					{" Moves"}
				</h2>
				<div id="moves" className={additional}>
					{moves.map((move, index) => {
						return (
							<p className="move" key={index}>
								{move.move.name + " "}
							</p>
						);
					})}
				</div>
			</section>
		</div>
	);
}

export default Individual;
