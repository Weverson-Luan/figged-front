/**
 * IMPORTS
 */
import styled from "styled-components";

// react-router-dom"
import { Link } from "react-router-dom";

const Container = styled.div`
	width: 100%;
	height: 3.75rem;
	background-color: ${({ theme }) => theme.colors.slate_700};
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding-right: 1.5rem;
`;

const WrapperTitle = styled.div`
	width: 6.25rem;
	height: 3.75rem;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Title = styled(Link)`
	color: #fff;
	font-size: 1.1rem;
	cursor: pointer;
	text-decoration: none;
	font-weight: bold;

	:hover {
		color: ${({ theme }) => theme.colors.gray_700};
	}
`;

const WrapperTitleRighr = styled.div`
	width: 320px;
	height: 5rem;
	display: flex;
	align-items: center;
	justify-content: space-between;

	@media screen and (max-width: 768px) {
		width: 100%;
		height: 60px;
		display: flex;
		align-items: center;
		justify-content: space-around;
	}
`;

const TitleTwo = styled(Link)`
	color: ${({ theme }) => theme.colors.natural};
	font-size: 1rem;
	text-align: center;
	text-decoration: none;
	font-weight: 600;

	:hover {
		color: ${({ theme }) => theme.colors.gray_700};
	}
`;

const BorderCustom = styled.div`
	width: 100%;
	height: 3.75rem;
	border: 1px solid ${({ theme }) => theme.colors.gray_200};
	border-radius: 4px;
	margin-top: 0.75rem;
	display: flex;
	align-items: center;
	padding-left: 1rem;
`;

const WrapperBorderCustom = styled.div`
	width: 100%;
	padding: 0 1rem;
`;

const SubTitleTwo = styled(Link)`
	color: ${({ theme }) => theme.colors.gray_500};
	font-size: 1rem;
	cursor: pointer;
	text-decoration: none;
	text-align: center;

	:hover {
		color: ${({ theme }) => theme.colors.blue_100};
	}
`;

const WrapperTitleBorder = styled.div`
	width: 230px;
	height: 3.75rem;
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
	WrapperBorderCustom,
	SubTitleTwo,
	WrapperTitleBorder,
};
