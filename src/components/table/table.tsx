/**
 * IMPORTS
 */

import { useTheme } from "styled-components";

import { Link } from "react-router-dom";

// data-fake
import { dataTable } from "./data-fake";

// styles
import {
  Container,
  TableHtml,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  FooterTable,
  TextSpanLeft,
  TextSpanRight,
  WrapperTextFooter,
  TextNumberPage,
} from "./styles";


const Table = () => {
  const theme = useTheme();
  return (
    <Container>
      <TableHtml>
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Data de criação</Th>
            <Th>Status</Th>
            <Th>Viagem</Th>
            <Th>Bobina</Th>
            <Th>Motorista</Th>
            <Th>Placa</Th>
            <Th>Grupo</Th>
            <Th>Tipo</Th>
          </Tr>
        </Thead>

        <Tbody>
          {dataTable.map((data) => (
            <Tr key={String(data.id)}>
              <Td>{data.id}</Td>
              <Td>{data.date_created}</Td>
              <Td>{data.status}</Td>
              <Td>{data.viagem}</Td>
              <Td>{data.bobina}</Td>
              <Td>
                <Link to={`aprovacao/${data.id}`}>{data.driver}</Link>
              </Td>
              <Td>{data.plate}</Td>
              <Td>{data.group}</Td>
              <Td>{data.type}</Td>
            </Tr>
          ))}
        </Tbody>
      </TableHtml>

      <FooterTable>
        <TextSpanLeft>Anterior </TextSpanLeft>
        <WrapperTextFooter background={true}>
          <TextNumberPage>1</TextNumberPage>
        </WrapperTextFooter>

        <WrapperTextFooter>
          <TextNumberPage color={theme.colors.blue_100}>2</TextNumberPage>
        </WrapperTextFooter>
        <TextSpanRight>Próximo</TextSpanRight>
      </FooterTable>
    </Container>
  );
};
/**
 * EXPORTS
 */
export { Table };
