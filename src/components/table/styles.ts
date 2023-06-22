/**
 * IMPORTS
 */
import styled from "styled-components";

// typings
import {
	type WrapperTextFooterProps,
	type TextNumberPageProps,
} from "./interface";

const Container = styled.div`
	margin-top: 1rem;
`;

const TableHtml = styled.table`
	width: 100%;
	border-collapse: collapse;
	margin-bottom: 1.5rem;

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
			margin-top: 1rem;
		}
	}
`;

const Th = styled.th`
	font-size: 1rem;
	font-weight: 600;
	letter-spacing: 0.5px;
	color: ${({ theme }) => theme.colors.black_200};
	opacity: 1;
	padding: 8px 1rem;
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
	font-size: 1rem;
	letter-spacing: 0.5px;
	font-weight: 400;
	color: ${({ theme }) => theme.colors.gray_700};
	padding: 8px 1rem;
	text-align: left;
	overflow-y: auto;
	cursor: pointer;

	//formatar link
	a {
		color: ${({ theme }) => theme.colors.blue_100};
		text-decoration: none;
		cursor: pointer;
	}

	::-webkit-scrollbar {
		height: 2px;
	}

	::-webkit-scrollbar-track {
		background: ${({ theme }) => theme.colors.black_200};
	}

	::-webkit-scrollbar-thumb {
		background: blue;
		border-radius: 0.75rem;
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
			padding-left: 1rem;
			font-weight: bold;
			text-align: left;
		}
	}

	@media screen and (max-width: 500px) {
		padding-left: 30%;
	}
`;

const FooterTable = styled.div`
	width: 100%;
	height: 8vh;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: transparent;
`;

const TextSpanLeft = styled.span`
	font-size: 1rem;
	color: ${({ theme }) => theme.colors.black_200};
	margin-right: 0.75rem;
	cursor: pointer;
`;

const TextSpanRight = styled.span`
	font-size: 1rem;
	color: ${({ theme }) => theme.colors.black_200};
	margin-left: 0.75rem;
	cursor: pointer;
`;

const WrapperTextFooter = styled.div<WrapperTextFooterProps>`
	width: 2.8rem;
	height: 2rem;
	margin: 2px;
	border: 1px solid ${({ theme }) => theme.colors.gray_200};
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: ${({ theme, background }) =>
		background ? theme.colors.blue_100 : theme.colors.natural};
`;

const TextNumberPage = styled.p<TextNumberPageProps>`
	font-size: 0.8rem;
	color: ${({ theme, color }) => color ?? theme.colors.natural};
`;
/**
 * EXPORTS
 */
export {
	Container,
	TableHtml,
	Thead,
	Tr,
	Th,
	Tbody,
	Td,
	FooterTable,
	TextSpanLeft,
	TextSpanRight,
	WrapperTextFooter,
	TextNumberPage,
};
