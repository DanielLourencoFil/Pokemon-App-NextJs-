import { pokeApi } from "../api";
import { PokemonFull } from "../interfaces/pokemonFull";

export const pokemonFecthData = async (nameOrId: string) => {
	try {
		const { data } = await pokeApi.get<PokemonFull>(`/pokemon/${nameOrId}`);

		const pokemon = {
			id: data.id,
			sprites: data.sprites,
			name: data.name,
			species: data.species,
		};
		return pokemon;
	} catch (error) {
		return null;
	}
};
