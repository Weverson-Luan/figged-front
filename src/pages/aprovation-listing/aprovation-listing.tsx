/**
 * IMPORTS
 */

import { useTheme } from "styled-components";

// components
import { Text } from "../../components/text";
import { ImageCustom } from "../../components/image";

// styles
import { Container, WrapperContent, WrapperTitle } from "./styles";

const AprovationListing = () => {
	const theme = useTheme();
	const data = [
		{ id: "1", name: "one" },
		{ id: "2", name: "true" },
		{ id: "3", name: "tree" },
		{ id: "4", name: "tree" },
		{ id: "5", name: "tree" },
		{ id: "6", name: "tree" },
	];
	return (
		<Container>
			<WrapperTitle>
				<Text
					marginTop={18}
					text="Lista de Documentos Aprovados:"
					align="left"
					letterHeight={24}
					letterSpacing={0.5}
					color={theme.colors.black_200}
					size={24}
					weight="600"
					marginBottom={16}
				/>
			</WrapperTitle>
			<WrapperContent>
				{data.map(dates => (
					<ImageCustom
						key={dates.id}
						type="aprovado"
						onClickApproved={() => {
							alert("Aprovar?");
						}}
						onClickDisapproved={() => {
							alert("Reprovar?");
						}}
					/>
				))}
			</WrapperContent>
		</Container>
	);
};

/**
 * EXPORTS
 */
export { AprovationListing };
