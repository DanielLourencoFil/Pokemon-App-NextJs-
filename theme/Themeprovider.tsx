import { useState, useContext, createContext, ReactNode } from "react";

type Props = {
	children?: ReactNode;
};

type ThemeDark = {
	darkTheme: boolean;
	toggleTheme?: () => void;
};
const defaultTheme = {
	darkTheme: true,
};

const ThemeContext = createContext<ThemeDark>(defaultTheme);

const Themeprovider = ({ children }: Props) => {
	const [darkTheme, setDark] = useState(defaultTheme.darkTheme);

	const toggleTheme = () => {
		setDark(!darkTheme);
	};

	return (
		<ThemeContext.Provider
			value={{
				darkTheme,
				toggleTheme,
			}}
		>
			{children}
		</ThemeContext.Provider>
	);
};
export default Themeprovider;

export const useTheme = () => {
	return useContext(ThemeContext);
};
