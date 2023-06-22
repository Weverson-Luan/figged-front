/**
 * IMPORTS
 */
import styled from "styled-components";

const Container = styled.div`
	width: 100%;
	display: flex;
	align-items: flex-start;
	justify-content: flex-start;
	flex-wrap: wrap;
	padding: 0 1rem;
`;

const WrapperContent = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: space-between;
	background-color: transparent;
`;

const WrapperTitle = styled.div`
	width: 100%;
	border-bottom: 2px solid ${({ theme }) => theme.colors.gray_200};
	margin-bottom: 2.12rem;

	@media screen and (max-width: 768px) {
		:first-child p {
			font-size: 1.1rem;
		}
	}
`;

/**
 * EXPORTS
 */
export { Container, WrapperContent, WrapperTitle };
