import { FC, ReactNode } from "react";
import Head from "next/head";
import Image from "next/image";

import { PropsLayout } from "../../interfaces";

import { useTheme } from "../../theme/Themeprovider";
import { Navbar } from "../ui";

export const Layout: FC<PropsLayout> = ({ children, title, pokemon }) => {
	const { darkTheme } = useTheme();

	let origin = typeof window === "undefined" ? "" : window.location.origin;

	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name="author" content="Daniel Lourenço" />
				<meta
					name="description"
					content={`Information about pokemon: ${pokemon}`}
				/>
				<meta name="keywords" content={`${pokemon}, pokemon, pokedex`} />
				<meta property="og:title" content={`Information about ${title}`} />
				<meta
					property="og:description"
					content={`This page is about ${title}`}
				/>
				<meta property="og:image" content={`${origin}/img/banner.png`} />
			</Head>
			<Navbar></Navbar>

			<main className={`${darkTheme ? "dark-theme" : "light-theme"} main`}>
				{children}
			</main>
		</>
	);
};
