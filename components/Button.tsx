import { useTheme } from "../theme/Themeprovider";

const Button = () => {
	const { toggleTheme, darkTheme } = useTheme();

	// const toogle = () => {
	// 	console.log(darkTheme);
	// 	toggleTheme();
	// };
	return <button onClick={toggleTheme}>Dark Mode</button>;
};

export default Button;
