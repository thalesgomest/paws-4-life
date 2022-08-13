import styled from 'styled-components';

export const PostContainer = styled.div`
	width: 350px;
	min-height: 100px;
	background-color: var(--cor-terciaria);
	border-radius: 10px;
	margin-bottom: 15px;

	:last-child {
		margin-bottom: 90px;
	}

	image {
		width: 100px;
		height: 100px;
	}
`;

export const PostDataUpside = styled.div`
	display: flex;
	span {
		color: #000000;
		font-weight: 400;
	}
`;

export const PostDataDownSide = styled.div`
	display: flex;
	flex-direction: column;
	padding: 10px;
	font-family: var(--fonte-primaria);

	p {
		font-weight: bold;
		margin-bottom: 10px;
		text-align: left;
		color: var(--cor-primaria);
	}

	span {
		text-align: justify;
		color: #000000;
		margin-bottom: 15px;
	}
`;

export const PostImage = styled.img`
	width: 100px;
	height: 100px;
	border-radius: 50%;
	object-fit: cover;
	margin: 15px;
	border: 1px solid var(--cor-primaria);
`;

export const PostInformation = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
	margin: 20px;

	p {
		font-size: 16px;
		font-weight: bold;
		color: var(--cor-primaria);
		font-family: var(--fonte-primaria);
	}
`;

export const MapContainer = styled.div`
	width: 350px;
	height: 350px;
	border-radius: 10px;
`;
