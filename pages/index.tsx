import type { NextPage, GetStaticProps } from "next";
// import { useTheme } from "../theme/Themeprovider";
import { Layout } from "../components/layouts";
import { SmallPokemon, PokemonListResponse } from "../interfaces";

import { pokeApi } from "../api";
import { SinglePokemonCard, PokemonList } from "../components";

interface Props {
	pokemons: SmallPokemon[];
}

const Home: NextPage<Props> = ({ pokemons }) => {
	// const { darkTheme } = useTheme();

	return (
		<Layout title={"Pokemon App"}>
			<PokemonList>
				{pokemons.map((item) => {
					return <SinglePokemonCard key={item.id} {...item} />;
				})}
			</PokemonList>
		</Layout>
	);
};

export default Home;

export const getStaticProps: GetStaticProps = async (ctx) => {
	const { data } = await pokeApi.get<PokemonListResponse>("/pokemon?limit=151");

	const pokemons: SmallPokemon[] = data.results.map((item, index) => {
		return {
			...item,
			id: index + 1,
			image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${(
				index + 1
			).toString()}.svg`,
		};
	});

	return {
		props: {
			pokemons,
		},
	};
};
