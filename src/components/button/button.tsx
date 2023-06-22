/**
 * IMPORTS
 */
import { AiOutlineLoading3Quarters } from "react-icons/ai";

// typings
import { type IButtonProps } from "./interface";

// styles
import { Container, Title } from "./styles";

const Button = ({
	width,
	height,
	backgroundColor,
	color,
	title,
	weight,
	loading,
	dataTestid,
	...rest
}: IButtonProps) => {
	return (
		<Container
			{...rest}
			data-testid={dataTestid}
			width={width}
			height={height}
			backgroundColor={backgroundColor}
		>
			{loading ? (
				<AiOutlineLoading3Quarters size={22} color={color} />
			) : (
				<Title color={color ?? "#fff"} weight={weight}>
					{title}
				</Title>
			)}
		</Container>
	);
};

/**
 * EXPORTS
 */
export { Button };
