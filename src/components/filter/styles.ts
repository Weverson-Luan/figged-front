/**
 * IMPORTS
 */
import styled from "styled-components";

const ContainerFiltered = styled.div`
	width: 100%;
	border: 1px solid ${({ theme }) => theme.colors.gray_200};
	border-radius: 4px;
	margin-bottom: 1rem;
`;

const WrapperTitle = styled.div`
	width: 100%;
	border-bottom: 1px solid ${({ theme }) => theme.colors.gray_200};

	@media screen and (max-width: 768px) {
		:first-child p {
			font-size: 1rem;
		}
	}
`;

const WrapperSelect = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	flex-wrap: wrap;
	margin-top: 1rem;
	padding: 0 1rem;
`;

const FooterBottom = styled.div`
	width: 100%;
	margin-top: 1rem;
`;

/**
 * EXPORTS
 */
export { ContainerFiltered, WrapperTitle, WrapperSelect, FooterBottom };
