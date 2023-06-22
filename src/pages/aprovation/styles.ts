/**
 * IMPORTS
 */
import styled from "styled-components";

const ContainerMain = styled.div`
	width: 100%;
	padding: 0 1rem;
`;

const WrapperTitle = styled.div`
	border-bottom: 2px solid ${({ theme }) => theme.colors.gray_200};
	margin-bottom: 2.12rem;

	@media screen and (max-width: 768px) {
		:first-child p {
			font-size: 1.1rem;
		}
	}
`;

const WrapperImage = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`;

/**
 * EXPORTS
 */
export { ContainerMain, WrapperImage, WrapperTitle };
