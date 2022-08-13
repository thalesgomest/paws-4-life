import styled from 'styled-components';

export const OngContainer = styled.div`
	width: 350px;
	height: 200px;
	background: var(--cor-secundaria);
	margin: 0 auto;
	border-radius: 10px;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	margin-bottom: 20px;

	:first-child {
		margin-top: 80px;
	}

	:last-child {
		margin-bottom: 90px;
	}

	p {
		margin-left: 20px;
		font-family: var(--fonte-primaria);
		color: var(--cor-primaria);
		font-weight: bold;
	}
`;
