const fetchApi = (type, name) => {
	if (name) {
		return fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then(
			(response) => {
				return response.json();
			}
		);
	} else {
		return fetch(
			type
				? `https://pokeapi.co/api/v2/type/${type}`
				: "https://pokeapi.co/api/v2/pokemon?limit=1281"
		).then((response) => {
			return response.json();
		});
	}
};

export default fetchApi;
