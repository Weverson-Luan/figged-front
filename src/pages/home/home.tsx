/**
 * IMPORTS
 */

import { useTheme } from "styled-components";
import { Text } from "../../components/text";
import {
  Container,
  WrapperImage,
  Image,
  HeaderImage,
  FooterImage,
  WrapperContent,
  Button,
  WrapperTextUser,
} from "./styles";

const Home = () => {
  const theme = useTheme();
  const data = [
    { id: "1", name: "one" },
    { id: "2", name: "true" },
    { id: "3", name: "tree" },
    { id: "3", name: "tree" },
  ];
  return (
    <Container>
      <div style={{ paddingLeft: 16 }}>
        <Text
          marginTop={8}
          text="Documentos Aprovados:"
          align="left"
          letterHeight={36}
          color={theme.colors.black_200}
          size={18}
          weight="600"
        />
      </div>
      <WrapperContent>
        {data.map((dates) => (
          <WrapperImage key={dates.id}>
            <HeaderImage backgroundColor={"green"}>
              <Text
                text="Novo"
                align="center"
                letterHeight={36}
                color={theme.colors.natural}
                size={18}
              />
            </HeaderImage>
            <Image src="https://www.campoere.com/image/midia/1-60622f283b1d0.jpg&w=470&h=246&crop-to-fit&q=90" />

            <WrapperTextUser>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Text
                  text="Usuário:"
                  align="left"
                  letterHeight={36}
                  color={theme.colors.black_200}
                  size={15}
                  width={16}
                  weight="600"
                />
                <p style={{ fontSize: 14 }}>Weverson Luan</p>

                <span style={{ marginLeft: 12, fontSize: 14 }}>
                  Data: 10/06/2023
                </span>
              </div>
            </WrapperTextUser>

            <FooterImage>
              <Button backgroundColor={theme.colors.green_100}>
                <Text
                  text="Aprovar"
                  align="center"
                  letterHeight={42}
                  color={theme.colors.natural}
                  weight="600"
                  size={16}
                />
              </Button>

              <Button backgroundColor={theme.colors.red_500}>
                <Text
                  text="Reprovar"
                  align="center"
                  letterHeight={42}
                  color={theme.colors.natural}
                  weight="600"
                  size={16}
                />
              </Button>
            </FooterImage>
          </WrapperImage>
        ))}
      </WrapperContent>
    </Container>
  );
};

/**
 * EXPORTS
 */
export { Home };
