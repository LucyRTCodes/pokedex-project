function Buttons({ setType }) {
	return (
		<div id="buttons">
			<button
				id="fire"
				onClick={(e) => {
					setType("fire");
				}}
			>
				Fire
			</button>
			<button
				id="water"
				onClick={(e) => {
					setType("water");
				}}
			>
				Water
			</button>
			<button
				id="grass"
				onClick={(e) => {
					setType("grass");
				}}
			>
				Grass
			</button>
			<button
				id="all"
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
