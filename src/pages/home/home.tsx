/**
 * IMPORTS
 */

import { useTheme } from "styled-components";
import { Table } from "../../components/table";
import { Text } from "../../components/text";

const Home = () => {
  const theme = useTheme();
  return (
    <div style={{ paddingLeft: 16 }}>
      <Text
        marginTop={8}
        text="Lista de documentos aprovados:"
        align="left"
        letterHeight={36}
        color={theme.colors.black_200}
        size={18}
        weight="600"
        marginBottom={30}
      />
      <div
        style={{ width: "100%", border: "1px solid #cdcdcd", marginBottom: 16 }}
      >
        <Text
          marginTop={8}
          text="Filtro:"
          align="left"
          letterHeight={36}
          color={theme.colors.black_200}
          size={18}
          weight="600"
          marginBottom={70}
        />
      </div>
      <Table />
    </div>
  );
};

/**
 * EXPORTS
 */
export { Home };
