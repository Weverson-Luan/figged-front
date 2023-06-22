/**
 * IMPORTS
 */
interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	title?: string;
	width?: number | string;
	height?: number | string;
	color?: string;
	weight?: number;
	backgroundColor?: string;
	loading?: boolean;
	dataTestid?: string;
	onClick?: (event?: React.MouseEvent<HTMLElement>) => void;
}

/**
 * EXPORTS
 */
export type { IButtonProps };
