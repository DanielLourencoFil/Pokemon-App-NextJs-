import { createContext, useContext, useState } from "react";
import { SmallPokemon } from "../interfaces/pokemonList";
import { Children } from "../interfaces/generic";

interface PokemonContext {
	favoritesList: SmallPokemon[];
	setToFavoritesList: (pokemon: SmallPokemon[]) => void;
}

const initialValue = {
	favoritesList: [],
	setToFavoritesList: () => {},
};
const FavoritesContext = createContext<PokemonContext>(initialValue);

const IPokemonContext = ({ children }: Children) => {
	const [favoritesList, setToFavoritesList] = useState<SmallPokemon[]>([]);

	const values = { setToFavoritesList, favoritesList };
	return (
		<FavoritesContext.Provider value={values}>
			{children}
		</FavoritesContext.Provider>
	);
};

export const useFavorites = () => {
	return useContext(FavoritesContext);
};
export default IPokemonContext;
