function PreviousButton({ setStart }) {
	return (
		<button
			onClick={(e) => {
				setStart((current) => {
					if (current > 0) current -= 20;
					return current;
				});
			}}
		>
			Previous
		</button>
	);
}

export default PreviousButton;
