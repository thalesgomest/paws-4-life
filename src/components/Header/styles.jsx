import styled from 'styled-components';

export const Header = styled.header`
	height: 60px;
	width: 100%;
	background-color: var(--cor-terciaria);
	position: fixed;
	top: 0;
	left: 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
	box-shadow: 0px 5px 9px 5px rgba(0, 0, 0, 0.6);
	margin: 0 auto;
	z-index: 2;

	.user-info {
		display: flex;
		align-items: center;

		span {
			font-size: 20px;
			font-weight: bold;
			font-family: var(--fonte-primaria);
			color: var(--cor-primaria);
		}
	}

	.icon {
		color: var(--cor-primaria);
		font-size: 50px;
		cursor: pointer;
		margin: 0 20px;
	}
`;
