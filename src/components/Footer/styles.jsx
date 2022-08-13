import styled from 'styled-components';

export const Footer = styled.footer`
	height: 80px;
	width: 100%;
	background-color: var(--cor-terciaria);
	position: fixed;
	bottom: 0;
	left: 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 0 auto;
	z-index: 2;

	.icon {
		color: var(--cor-primaria);
		font-size: 50px;
		cursor: pointer;
		margin: 0 20px;
	}
`;

export const IconContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	p {
		font-family: var(--fonte-primaria);
		color: var(--cor-primaria);
		margin-top: 5px;
	}
`;
