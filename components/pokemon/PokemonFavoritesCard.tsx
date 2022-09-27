import Image from "next/image";
import { useRouter } from "next/router";

import style from "./SinglePokemonCard.module.css";

type Id = {
	id: number;
};

const PokemonFavoritesCard = ({ id }: Id) => {
	const router = useRouter();
	const onClick = () => {
		router.push(`/pokemon/${id}`);
	};
	return (
		<div className={style.card} onClick={onClick}>
			<>
				<Image
					src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
					alt={"pokemon"}
					width="100%"
					height="150px"
				/>
			</>
		</div>
	);
};

export default PokemonFavoritesCard;
