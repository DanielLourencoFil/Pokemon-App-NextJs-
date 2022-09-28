import { useState, useEffect } from "react";

import Image from "next/image";
import { useRouter } from "next/router";

import { FaTimes } from "react-icons/fa";

import styles from "./SinglePokemonCard.module.css";
import stylesNative from "./PokemonFavoritesCard.module.css";
import { localFavorites } from "../../utils/FavoritesStorage";

type Props = {
	id: number;
	setIsRemovedFromFavorites: (id: number) => void;
};

const PokemonFavoritesCard = ({ id, setIsRemovedFromFavorites }: Props) => {
	const router = useRouter();
	const onClick = () => {
		router.push(`/pokemon/${id}`);
	};

	const renderRemovePokemonFromList = (pokeId: number) => {
		setIsRemovedFromFavorites(id);
		localFavorites.toggleFavorite(pokeId);
	};

	return (
		<div className={styles.card}>
			<FaTimes
				onClick={() => renderRemovePokemonFromList(id)}
				className={stylesNative["remove"]}
			/>
			<Image
				src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
				alt={"pokemon"}
				width="100%"
				height="150px"
				onClick={onClick}
			/>
		</div>
	);
};

export default PokemonFavoritesCard;
