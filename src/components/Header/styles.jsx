import styled from 'styled-components';

export const Header = styled.header`
	height: 60px;
	background-color: var(--cor-terciaria);
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 0 auto;

	.icon {
		color: var(--cor-primaria);
		font-size: 50px;
		cursor: pointer;
		margin: 0 20px;
	}
`;
