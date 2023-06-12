/**
 * IMPORTS
 */
import { Link } from "react-router-dom";
import {
  Container,
  WrapperTitle,
  Title,
  WrapperTitleRighr,
  TitleTwo,
  BorderCustom,
  SubTitleTwo,
  WrapperTitleBorder,
} from "./styles";

const Header = () => {
  return (
    <>
      <Container>
        <WrapperTitle>
          <Title>Figged</Title>
        </WrapperTitle>
        <WrapperTitleRighr>
          <TitleTwo to={"aprovacao-pedentes"}>Aprovação Pendentes</TitleTwo>
          <TitleTwo to={"aprovacoes"}>Todas Aprovação</TitleTwo>
        </WrapperTitleRighr>
      </Container>
      <BorderCustom>
        <WrapperTitleBorder>
          <SubTitleTwo to={"aprovacoes"}>Lista Aprovação</SubTitleTwo>
          <span>/</span>
          <SubTitleTwo to={"aprovacao"}>Atualizar</SubTitleTwo>
        </WrapperTitleBorder>
      </BorderCustom>
    </>
  );
};

/**
 * EXPORTS
 */
export { Header };
