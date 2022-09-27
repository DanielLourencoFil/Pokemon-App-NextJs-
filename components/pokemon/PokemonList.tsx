import styles from "./PokemonList.module.css";
import { FC } from "react";
import { Children } from "../../interfaces/generic";

export const PokemonList: FC<Children> = ({ children }) => {
	return <ul className={styles["pokemon-list"]}>{children}</ul>;
};
