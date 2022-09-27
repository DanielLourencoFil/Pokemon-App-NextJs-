const toggleFavorite = (id: number) => {
	let favoritesStorage: number[] = JSON.parse(
		localStorage.getItem("favorites") || "[]"
	);

	if (favoritesStorage.includes(id)) {
		favoritesStorage = favoritesStorage.filter((pokemonId) => pokemonId !== id);
	} else {
		favoritesStorage.push(id);
	}
	localStorage.setItem("favorites", JSON.stringify(favoritesStorage));
};

const isFavoriteStorage = (id: number): boolean => {
	let favoritesStorage: number[] = JSON.parse(
		localStorage.getItem("favorites") || "[]"
	);
	if (favoritesStorage.includes(id)) {
		return true;
	} else {
		return false;
	}
};

const pokemons = (): number[] => {
	return JSON.parse(localStorage.getItem("favorites") || "[]");
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
	toggleFavorite,
	isFavoriteStorage,
	pokemons,
};
