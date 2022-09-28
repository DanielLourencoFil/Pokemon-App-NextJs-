import { GetStaticProps } from "next";
import { GetStaticPaths } from "next";

import { pokeApi } from "../../api";
import { Layout } from "../../components/layouts";
import SinglePokemonCardPage from "../../components/pokemon/SinglePokemonCardPage";
import { PokemonFull } from "../../interfaces/pokemonFull";
import { PokemonListResponse } from "../../interfaces/pokemonList";
import { pokemonFecthData } from "../../utils/PokemonFetchData";

interface Props {
	pokemon: PokemonFull;
}

const PokemonName = ({ pokemon }: Props) => {
	return (
		<Layout title={pokemon.name}>
			<SinglePokemonCardPage pokemon={pokemon} />
		</Layout>
	);
};

export default PokemonName;

export const getStaticPaths: GetStaticPaths = async (ctx) => {
	const { data } = await pokeApi.get<PokemonListResponse>("/pokemon?limit=151");

	const pokemonNames = data.results.map(({ name }) => {
		return {
			params: {
				name,
			},
		};
	});

	return {
		paths: [...pokemonNames],
		fallback: "blocking",
	};
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const { name } = params as { name: string };

	const pokemon = await pokemonFecthData(name);

	if (!pokemon) {
		return {
			redirect: {
				destination: "/",
				permanent: false,
			},
		};
	}

	return {
		props: {
			pokemon,
			revalide: 86400,
		},
	};
};
