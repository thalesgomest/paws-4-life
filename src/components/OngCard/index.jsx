import * as S from './styles';

const OngCard = ({ data }) => {
	return (
		<S.OngContainer>
			<p>
				Ong: <span>{data.name}</span>
			</p>
			<p>
				Telephone: <span>{data.telephone}</span>
			</p>
			<p>
				Address: <span>{data.address}</span>
			</p>
			<p>
				Site: <span>{data.site}</span>
			</p>
			<p>
				Email: <span>{data.email}</span>
			</p>
		</S.OngContainer>
	);
};

export default OngCard;
