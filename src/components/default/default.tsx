/**
 * IMPORTS
 */
import { useTheme } from "styled-components";

// components
import { Text } from "../text/text";

// styles
import { Container, WrapperTitle } from "./styles";

const Default = () => {
	const theme = useTheme();
	return (
		<Container>
			<WrapperTitle>
				<Text
					marginTop={8}
					text="Filtrar Resultados:"
					align="left"
					letterHeight={36}
					color={theme.colors.black_200}
					size={18}
					weight="600"
				/>
			</WrapperTitle>
		</Container>
	);
};

/**
 * EXPORTS
 */
export { Default };
