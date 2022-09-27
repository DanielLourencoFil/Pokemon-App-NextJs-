import { NextPage, GetStaticPaths, GetStaticProps } from "next";
import { Layout } from "../../components/layouts";
import { PokemonFull } from "../../interfaces/pokemonFull";
import SinglePokemonCardPage from "../../components/pokemon/SinglePokemonCardPage";
import { pokemonFecthData } from "../../utils/PokemonFetchData";

interface Props {
	pokemon: PokemonFull;
}

const SinglePokemonPage: NextPage<Props> = ({ pokemon }) => {
	return (
		<Layout title={pokemon.name}>
			<SinglePokemonCardPage pokemon={pokemon} />
		</Layout>
	);
};

export default SinglePokemonPage;

export const getStaticPaths: GetStaticPaths = async (ctx) => {
	let urls = [];

	for (let i = 1; i <= 151; i++) {
		urls.push({
			params: {
				id: `${i}`,
			},
		});
	}

	return {
		paths: [...urls],
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const { id } = params as { id: string };
	return {
		props: {
			pokemon: await pokemonFecthData(id),
		},
	};
};
