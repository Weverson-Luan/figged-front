/**
 * IMPORTS
 */
import styled from "styled-components";

// typings
import { WrapperHeaderProps } from "./interface";

const Container = styled.div`
  width: 30%;
  height: 450px;
  border-radius: 0.25rem;
  border: 1px solid ${({ theme }) => theme.colors.gray_200};
  background-color: transparent;
  margin-bottom: 1.5rem;
  display: column;
  align-items: center;
  justify-content: space-around;

  @media screen and (max-width: 768px) {
    display: block;
    width: 100%;
    background-color: transparent;
  }
`;

const WrapperHeader = styled.div<WrapperHeaderProps>`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme, type }) =>
    type === "aprovado" ? theme.colors.green_200 : "#0d6efd"};
  border-top-right-radius: 0.25rem;
  border-top-left-radius: 0.25rem;
`;

const WrapperImage = styled.div`
  width: 100%;
  height: 17.5rem;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
`;

const WrapperUserMain = styled.div`
  width: 100%;
  padding: 0 1rem;
`;

const WrapperUser = styled.div`
  width: 100%;
  height: 45px;
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.25rem;
  border: 1px solid ${({ theme }) => theme.colors.gray_200};
`;

const WrapperTextUser = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;

const FooterImage = styled.div`
  width: 100%;
  height: 60px;
  margin-top: 4px;
  background-color: transparent;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
`;

/**
 * EXPORTS
 */
export {
  Container,
  WrapperHeader,
  WrapperImage,
  Image,
  WrapperUserMain,
  WrapperUser,
  WrapperTextUser,
  FooterImage,
};
