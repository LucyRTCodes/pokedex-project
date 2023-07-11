import { useEffect, useState } from "react";
import fetchApi from "../fetchApi";

function Buttons({ setType }) {
	const [types, setTypes] = useState(["fire", "water", "grass"]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		fetch("https://pokeapi.co/api/v2/type")
			.then((response) => {
				return response.json();
			})
			.then(({ results }) => {
				const allTypes = results.map((type) => {
					return type.name;
				});
				setTypes(allTypes);
				setIsLoading(false);
			});
	}, []);

	if (isLoading) {
		return <p>Loading...</p>;
	}

	return (
		<div id="buttons">
			{types.map((type, index) => {
				return (
					<button
						key={index}
						className={type}
						onClick={(e) => {
							setType(type);
						}}
					>
						{type[0].toUpperCase() + type.slice(1)}
					</button>
				);
			})}

			<button
				className="all"
				onClick={(e) => {
					setType(null);
				}}
			>
				All
			</button>
		</div>
	);
}

export default Buttons;
