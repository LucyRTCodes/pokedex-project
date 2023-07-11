function NextButton({ setStart, pokemonList }) {
	return (
		<button
			onClick={(e) => {
				setStart((current) => {
					if (current + 20 <= pokemonList.length) current += 20;
					return current;
				});
			}}
		>
			Next
		</button>
	);
}

export default NextButton;
