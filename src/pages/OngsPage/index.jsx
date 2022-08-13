import React, { useEffect, useContext } from 'react';
import OngCard from '../../components/OngCard';
import { OngContext } from '../../providers/OngProvider';
import { useNavigate } from 'react-router-dom';
import isLogged from '../../utils/isLogged';
import * as S from './styles';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const OngsPage = () => {
	const navigate = useNavigate();
	const { getAllOngs, allOngs } = useContext(OngContext);
	useEffect(() => {
		if (!isLogged()) {
			navigate('/sign-in');
		}
		getAllOngs();
	}, []);
	return (
		<>
			<Header />
			<S.OngContainer>
				{allOngs.map((ong) => (
					<OngCard key={ong.id} data={ong} />
				))}
			</S.OngContainer>
			<Footer />
		</>
	);
};

export default OngsPage;
