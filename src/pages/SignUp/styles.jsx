import styled from 'styled-components';
import device from '../../utils/devicesSizes';

const SignUpContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 50px;

	p {
		font-family: var(--fonte-primaria);
		font-style: normal;
		font-weight: 400;
		font-size: 20px;
		color: var(--cor-terciaria);
		margin-bottom: 20px;
	}

	img {
		width: 200px;
		height: 200px;
		margin-bottom: 5px;
	}

	h1 {
		font-family: var(--fonte-secundaria);
		font-size: 50px;
		color: var(--cor-terciaria);
		margin-bottom: 30px;
	}
`;

const Form = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	position: relative;

	input {
		min-width: 300px;
		height: 57px;
		background: var(--cor-terciaria);
		border-radius: 5px;
		border: none;
		padding-left: 50px;
		margin-bottom: 20px;
		font-family: var(--fonte-primaria);
		font-size: 20px;
		color: var(--cor-primaria);

		&:focus {
			outline: none;
		}
		&::placeholder {
			font-family: var(--fonte-secundaria);
			font-weight: 400;
			font-size: 30px;
			color: var(--cor-primaria);
		}
		@media ${device.desktop} {
			width: 420px;
			height: 57px;
		}
	}

	input:last-child {
		margin-bottom: 100px;
	}

	input:focus::placeholder {
		color: transparent;
	}

	.input_container {
		position: relative;
		padding: 0;
		margin: 0;

		.icon_input {
			position: absolute;
			top: 0;
			left: 0;
			margin-top: 13px;
			margin-left: 10px;
			font-size: 30px;
			color: var(--cor-primaria);
		}
	}

	.error_password {
		border: 1px solid rgba(245, 0, 0, 0.5);
	}

	button {
		width: 331px;
		height: 66px;
		background: var(--cor-secundaria);
		border-radius: 5px;
		border: none;
		color: #ffffff;
		font-family: var(--fonte-primaria);
		font-style: normal;
		font-weight: 600;
		font-size: 30px;
		margin-bottom: 20px;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		&:focus {
			outline: none;
		}
		@media ${device.desktop} {
			width: 420px;
			height: 66px;
		}
	}

	.button-disabled {
		background: rgba(93, 93, 94, 0.5);
		cursor: auto;
	}
`;

export { SignUpContainer, Form };
