/**
 * IMPORTS
 */
import styled from "styled-components";

// typings
import { type IButtonProps } from "./interface";

const Container = styled.button<IButtonProps>`
	width: ${({ width }) => width ?? "100%"};
	height: 2.5rem;
	border: 1px;
	background-color: ${({ backgroundColor, theme }) =>
		backgroundColor ?? theme.colors.natural};
	padding: 10px;
	border-radius: 4px;
	margin-bottom: 8px;
`;

const Title = styled.p<IButtonProps>`
	font-family: ${({ theme }) => theme.fonts.normal};
	font-style: normal;
	font-weight: ${({ weight }) => weight ?? 300};
	font-size: 1rem;
	line-height: 1.1rem;
	color: ${({ theme, color }) => color ?? theme.colors.natural};
`;

/**
 * EXPORTS
 */
export { Container, Title };
