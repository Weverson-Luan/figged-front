/**
 * IMPORTS
 */
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const WrapperContent = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  background-color: transparent;
  
`;

const WrapperImage = styled.div`
  width: 480px;
  margin-top: 20px;
  background-color: transparent;
  margin-left: 16px;
`;
type HeaderProps = {
  backgroundColor: string;
}
const HeaderImage = styled.div<HeaderProps>`
  width: 100%;
  height: 40px;
  background-color: ${({ backgroundColor})=> backgroundColor ? backgroundColor : 'green'};
`;
const Image = styled.img`
  width: 100%;
  height: 300px;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
`;

const WrapperTextUser = styled.div`
  width: 100%;
  height: 40px;
  border: 1px solid ${({ theme})=> theme.colors.gray_750};
  border-radius: 4px;
  padding-left: 8px;
  margin-top: 8px;
`;

const FooterImage = styled.div`
  width: 100%;
  height: 48px;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2px;
`;

type ButtonProps = {
  backgroundColor: string
}
const Button = styled.button<ButtonProps>`
  width: 230px;
  height: 40px;
  border-radius: 6px;
  background-color: ${({ backgroundColor })=> backgroundColor ? backgroundColor : 'red' };
`;

/**
 * EXPORTS
 */
export {
  Container,
  WrapperContent,
  WrapperImage,
  HeaderImage,
  WrapperTextUser,
  FooterImage,
  Image,
  Button
}