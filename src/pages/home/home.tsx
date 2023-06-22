/**
 * IMPORTS
 */

import { useTheme } from "styled-components";

// components
import { Table } from "../../components/table";
import { Text } from "../../components/text";
import { Filter } from "../../components/filter";

// styles
import {
	ContainerMain,
	ContainerFiltered,
	WrapperTable,
	WrapperTitle,
} from "./styles";

const Home = () => {
	const theme = useTheme();
	return (
		<ContainerMain>
			<WrapperTitle>
				<Text
					marginTop={18}
					text="Lista de Documentos:"
					align="left"
					letterHeight={24}
					letterSpacing={0.5}
					color={theme.colors.black_200}
					size={24}
					weight="600"
					marginBottom={30}
				/>
			</WrapperTitle>

			{/** COMPONENTE DE FILTRO */}
			<ContainerFiltered>
				<Filter />
			</ContainerFiltered>

			{/** COMPONENTE DE TABELA */}
			<WrapperTable>
				<Table />
			</WrapperTable>
		</ContainerMain>
	);
};

/**
 * EXPORTS
 */
export { Home };
