import Image from "next/image";

import styles from "./NoFavorites.module.css";

const NoFavorites = () => {
	return (
		<div className={styles.container}>
			<h1 className={styles.text}>No favorites selected</h1>
			<Image
				src={
					"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg"
				}
				alt={"pokemon"}
				width={100}
				height={100}
				className={styles.pokemon}
			/>
		</div>
	);
};

export default NoFavorites;
