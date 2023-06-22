/**
 * IMPORTS
 */
import styled from "styled-components";

const ContainerMain = styled.div`
	width: 100%;
	padding: 0 1rem;
`;

const WrapperTitle = styled.div`
	@media screen and (max-width: 768px) {
		:first-child p {
			font-size: 1.1rem;
		}
	}
`;

const ContainerFiltered = styled.div`
	width: 100%;
	margin-bottom: 3.38rem;
`;

const WrapperTable = styled.div`
	width: 100%;
`;

/**
 * EXPORTS
 */
export { ContainerMain, ContainerFiltered, WrapperTable, WrapperTitle };
