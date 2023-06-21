/**
 * IMPORTS
 */
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  flex: 1;
  padding: 0 16px; // padding esquerda e direita
`;

const WrapperTitle = styled.div`
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray_200};
`;

/**
 * EXPORTS
 */
export { Container, WrapperTitle };
