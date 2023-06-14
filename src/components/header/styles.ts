/**
 * IMPORTS
 */
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 60px;
  background-color: ${({theme})=> theme.colors.slate_700}; 
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 24px;
`;

const WrapperTitle = styled.div`
  width: 100px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  color: #FFF;
  font-size: 18px;

`;

const WrapperTitleRighr = styled.div`
  width: 300px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TitleTwo = styled(Link)`
  color: #FFF;
  font-size: 16px;

  text-decoration: none;
  

  :hover{
    color: ${({theme})=> theme.colors.gray_700}
  }
`;

const BorderCustom = styled.div`
  width: 100%;
  height: 60px;
  border: 1px solid ${({theme})=> theme.colors.gray_500};
  margin-top: 12px;
  display: flex;
  align-items: center;
  padding-left: 16px;

`;

const SubTitleTwo = styled(Link)`
  color: ${({theme})=> theme.colors.gray_500};
  font-size: 16px;
  cursor: pointer;

  text-decoration: none;
  

`;

const WrapperTitleBorder = styled.div`
  width: 230px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;



/**
 * EXPORTS
 */
export {
  Container,
  WrapperTitle,
  Title,
  WrapperTitleRighr,
  TitleTwo,
  BorderCustom,
  SubTitleTwo,
  WrapperTitleBorder
}