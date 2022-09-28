import { useRouter } from "next/router";
import Image from "next/image";

import { SmallPokemon } from "../../interfaces";

import styles from "./SinglePokemonCard.module.css";

export const SinglePokemonCard = ({ id, name, image }: SmallPokemon) => {
	const router = useRouter();

	const onClick = () => {
		router.push(`/name/${name}`);
	};

	return (
		<li className={styles.card} onClick={onClick}>
			<Image
				src={image || ""}
				alt={name}
				height="125px"
				width="100%"
				className={styles["image-animation"]}
			/>
			<div className={styles["card-footer"]}>
				<h2>{name}</h2>
				<h2>#{id}</h2>
			</div>
		</li>
	);
};
