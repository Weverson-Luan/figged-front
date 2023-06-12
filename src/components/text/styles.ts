/**
 * IMPORTS
 */
import styled, { css } from 'styled-components';

const TextStyled = styled.p<any>`
  color: ${({ color, theme }: any) => color || theme.natural};
  font-size: ${({ size = 16 }: any) => size}px;
  width: ${({ width = 100 }: any) => width}%;
  text-align: ${({ align = 'center' }: any) => align};
  margin: ${({ margin = 0 }: any) => margin}px;
  line-height: ${({ size = 16 }: any) => (size * 1.3)}px;
  margin-bottom: ${({ marginBottom = 0 }: any) => marginBottom}px;
  margin-top: ${({ marginTop = 0 }: any) => `${marginTop}px`};
  margin-left: ${({ marginLeft = 0 }: any) => marginLeft}px;
  margin-right: ${({ marginRight = 0 }: any) => marginRight}px;
  font-weight: ${({ weight = '400' }: any) => weight};
  text-decoration-line: ${({ textDecoration }: any) => (textDecoration || 'none')};
  font-family: ${({ fontFamily }: any) => (fontFamily || 'sans-serif')};
  letter-spacing: ${({ letterSpacing = 0.5 }: any) => letterSpacing}px;
  line-height: ${({ letterHeight = 24 }: any) => letterHeight}px;
  z-index: ${({ zIndex = 1 }: any) => zIndex};
  position: relative;

  ${({ ellipsis }: any) => ellipsis
    && css`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `}
`;


/**
 * EXPORTS
 */
export { TextStyled };