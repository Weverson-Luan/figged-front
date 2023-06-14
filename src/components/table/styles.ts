/**
 * IMPORTS
 */
import styled from "styled-components";

const Container = styled.div``;

const Text = styled.h1``;

const TableHtml = styled.table`
  width: 100%;
  border-collapse: collapse;

  @media screen and (max-width: 768px) {
    display: block;
    width: 100%;
  }
`;
const Thead = styled.thead`
  background: ${({ theme }) => theme.colors.natural};

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const Tr = styled.tr`
  cursor: pointer;

  &:nth-child(odd) {
    background: ${({ theme }) => theme.colors.gray_350};
  }

  &:nth-child(even) {
    background: ${({ theme }) => theme.colors.natural};
  }

  &:hover {
    background: ${({ theme }) => theme.colors.gray_350};
  }

  @media screen and (max-width: 768px) {
    display: block;
    width: 100%;

    & + tr {
      margin-top: 16px;
    }
  }
`;
const Th = styled.th`
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.5px;
  color: ${({ theme }) => theme.colors.black_200};
  opacity: 1;
  padding: 8px 16px;
  vertical-align: top;
  text-align: left;
  background: ${({ theme }) => theme.colors.natural};

  cursor: pointer;
`;

const Tbody = styled.tbody`
  @media screen and (max-width: 768px) {
    display: block;
    width: 100%;
  }
`;

const Td = styled.td`
  font-size: 16px;
  letter-spacing: 0.5px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.gray_700};
  padding: 8px 16px;
  text-align: left;
  overflow-y: auto;
  cursor: pointer;

  ::-webkit-scrollbar {
    height: 2px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.black_200};
  }

  ::-webkit-scrollbar-thumb {
    background: blue;
    border-radius: 12px;
  }

  @media screen and (max-width: 768px) {
    display: block;
    width: 100%;
    text-align: right;
    padding-left: 20%;
    position: relative;

    &::before {
      content: attr(data-label);
      position: absolute;
      left: 0;
      width: 50%;
      padding-left: 16px;
      font-weight: bold;
      text-align: left;
    }
  }

  @media screen and (max-width: 500px) {
    padding-left: 30%;
  }
`;

/**
 * EXPORTS
 */
export { Container, Text, TableHtml, Thead, Tr, Th, Tbody, Td };
