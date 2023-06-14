/**
 * IMPORTS
 */

import { Container, TableHtml, Thead, Tr, Th, Tbody, Td } from "./styles";

const Table = () => {
  return (
    <Container>
      {/*<Text>Table</Text>*/}

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
          <Tr>
            <Td>1</Td>
            <Td>10/09/2022</Td>
            <Td>200</Td>
            <Td>R$ 300,00</Td>
            <Td>SIM</Td>
            <Td>LUAN</Td>
            <Td>RFG0957</Td>
            <Td>Isauro Neto (b)</Td>
            <Td>Bobina</Td>
          </Tr>

          <Tr>
            <Td>1</Td>
            <Td>10/09/2022</Td>
            <Td>200</Td>
            <Td>R$ 300,00</Td>
            <Td>SIM</Td>
            <Td>LUAN</Td>
            <Td>RFG0957</Td>
            <Td>Isauro Neto (b)</Td>
            <Td>Bobina</Td>
          </Tr>

          <Tr>
            <Td>1</Td>
            <Td>10/09/2022</Td>
            <Td>200</Td>
            <Td>R$ 300,00</Td>
            <Td>SIM</Td>
            <Td>LUAN</Td>
            <Td>RFG0957</Td>
            <Td>Isauro Neto (b)</Td>
            <Td>Bobina</Td>
          </Tr>

          <Tr>
            <Td>1</Td>
            <Td>10/09/2022</Td>
            <Td>200</Td>
            <Td>R$ 300,00</Td>
            <Td>SIM</Td>
            <Td>LUAN</Td>
            <Td>RFG0957</Td>
            <Td>Isauro Neto (b)</Td>
            <Td>Bobina</Td>
          </Tr>

          <Tr>
            <Td>1</Td>
            <Td>10/09/2022</Td>
            <Td>200</Td>
            <Td>R$ 300,00</Td>
            <Td>SIM</Td>
            <Td>LUAN</Td>
            <Td>RFG0957</Td>
            <Td>Isauro Neto (b)</Td>
            <Td>Bobina</Td>
          </Tr>

          <Tr>
            <Td>1</Td>
            <Td>10/09/2022</Td>
            <Td>200</Td>
            <Td>R$ 300,00</Td>
            <Td>SIM</Td>
            <Td>LUAN</Td>
            <Td>RFG0957</Td>
            <Td>Isauro Neto (b)</Td>
            <Td>Bobina</Td>
          </Tr>
        </Tbody>
      </TableHtml>
    </Container>
  );
};
/**
 * EXPORTS
 */
export { Table };
