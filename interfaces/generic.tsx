import { ReactNode } from "react";

export type Children = {
	children?: ReactNode;
};

export interface PropsLayout {
	title?: string;
	pokemon?: string;
	children?: ReactNode;
}
