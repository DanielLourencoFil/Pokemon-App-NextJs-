import { useEffect, useState } from "react";
// import { useFavorites } from "../../context/PokemonContext";

import Image from "next/image";

import { Layout } from "../../components/layouts";
import { PokemonList } from "../../components";
import { SmallPokemon } from "../../interfaces/pokemonList";
import { localFavorites } from "../../utils/FavoritesStorage";

import NoFavorites from "../../components/ui/NoFavorites/NoFavorites";
import PokemonFavoritesCard from "../../components/pokemon/PokemonFavoritesCard";

const Favorites = () => {
	// const { favoritesList } = useFavorites();
	const [pokemons, setPokemons] = useState<number[]>([]);
	const [isRemovedFromFavorites, setIsRemovedFromFavorites] =
		useState<number>(0);

	useEffect(() => {
		setPokemons(localFavorites.pokemons());
	}, [isRemovedFromFavorites]);

	return (
		<Layout title={"Pokemon App"}>
			{pokemons.length === 0 ? (
				<NoFavorites />
			) : (
				<PokemonList>
					{pokemons.map((id) => {
						return (
							<PokemonFavoritesCard
								id={id}
								key={id}
								setIsRemovedFromFavorites={setIsRemovedFromFavorites}
							/>
						);
					})}
				</PokemonList>
			)}
		</Layout>
	);
};

export default Favorites;
