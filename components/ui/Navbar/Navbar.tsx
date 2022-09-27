import styles from "./Navbar.module.css";
import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
	return (
		<nav className={styles["navbar-container"]}>
			<div className={styles["navbar"]}>
				<Link href="/">
					<div className={styles["logo-container"]}>
						<>
							<Image
								src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
								alt="pokemon"
								width={70}
								height={70}
								className={styles["logo-image"]}
							/>
							<h2 className={styles["logo-capital"]}>P</h2>
							<h3 className={styles["logo-body"]}>ókemon</h3>
						</>
					</div>
				</Link>
				<Link href={"/favorites"}>
					<button className={styles["favorites"]}>Favorites</button>
				</Link>
			</div>
		</nav>
	);
};
