import styles from "./SinglePokemonCard.module.css";

import { useRouter } from "next/router";
import Image from "next/image";

import { SmallPokemon } from "../../interfaces";

export const SinglePokemonCard = ({ id, name, image }: SmallPokemon) => {
	const router = useRouter();

	const onClick = () => {
		router.push(`/name/${name}`);
	};
	// const onClick = () => {
	// 	router.push(`/pokemon/${id}`);
	// };

	return (
		<li className={styles.card} onClick={onClick}>
			<Image src={image || ""} alt={name} height="150px" width="100%" />
			<div className={styles["card-footer"]}>
				<h2>#{id}</h2>
				<h2>{name}</h2>
			</div>
		</li>
	);
};
