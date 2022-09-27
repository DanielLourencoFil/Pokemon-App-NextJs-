import { useEffect, useState } from "react";
import { useFavorites } from "../../context/PokemonContext";

import Image from "next/image";

import { Layout } from "../../components/layouts";
import { PokemonList } from "../../components";
import { SmallPokemon } from "../../interfaces/pokemonList";
import { localFavorites } from "../../utils/FavoritesStorage";

import NoFavorites from "../../components/ui/NoFavorites/NoFavorites";
import PokemonFavoritesCard from "../../components/pokemon/PokemonFavoritesCard";

const Favorites = () => {
	const { favoritesList } = useFavorites();
	const [pokemons, setPokemons] = useState<number[]>([]);

	useEffect(() => {
		setPokemons(localFavorites.pokemons());
	}, []);

	return (
		<Layout title={"Pokemon App"}>
			<PokemonList>
				{pokemons.length === 0 ? (
					<NoFavorites />
				) : (
					pokemons.map((id) => {
						return <PokemonFavoritesCard id={id} key={id} />;
					})
				)}
			</PokemonList>
		</Layout>
	);
};

export default Favorites;
