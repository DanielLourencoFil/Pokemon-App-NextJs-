import { useEffect, useState } from "react";
import React from "react";

import Image from "next/image";

import confetti from "canvas-confetti";

import { PokemonFull } from "../../interfaces";
import { localFavorites } from "../../utils/FavoritesStorage";

import styles from "./SinglePokemonCardPage.module.css";

type Props = {
	pokemon: PokemonFull;
};

const SinglePokemonCardPage: React.FC<Props> = ({ pokemon }) => {
	const { species, sprites, id } = pokemon;
	const [isFavorite, setIsFavorite] = useState<boolean>(false);

	const favoritesHandle = () => {
		localFavorites.toggleFavorite(id);
		setIsFavorite(localFavorites.isFavoriteStorage(id));

		if (isFavorite) return;
		confetti({
			zIndex: 999,
			particleCount: 100,
			spread: 150,
			angle: -100,
			origin: {
				x: 1,
				y: 0,
			},
		});
	};
	useEffect(() => {
		setIsFavorite(localFavorites.isFavoriteStorage(id));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<section className={styles.container}>
			<div className={styles.card}>
				<Image
					src={sprites.other?.dream_world.front_default || ""}
					alt={species.name}
					height="200px"
					width="100%"
				/>
			</div>
			<div className={`${styles["card-footer"]}`}>
				<div className={styles["footer-top"]}>
					<h2 className={styles.title}>{species.name}</h2>
					<button
						className={styles["favorite-btn"]}
						onClick={() => favoritesHandle()}
					>
						{isFavorite ? "Χ " : " + "}Favorites
					</button>
				</div>
				<h2 className={styles.subtitle}>Sprites:</h2>
				<div className={styles["sprites-container"]}>
					<Image
						src={sprites.front_default}
						alt={species.name}
						height="100px"
						width="100%"
					/>
					<Image
						src={sprites.back_default}
						alt={species.name}
						height="100px"
						width="100%"
					/>
					<Image
						src={sprites.front_shiny}
						alt={species.name}
						height="100px"
						width="100%"
					/>
					<Image
						src={sprites.back_shiny}
						alt={species.name}
						height="100px"
						width="100%"
					/>
				</div>
			</div>
		</section>
	);
};

export default SinglePokemonCardPage;
