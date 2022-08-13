import React, { useContext } from 'react';
import * as S from './styles';
import { useNavigate } from 'react-router-dom';
import { FaDog } from 'react-icons/fa';
import { GiDogHouse } from 'react-icons/gi';
import { CgMenuGridO } from 'react-icons/cg';

const Footer = () => {
	const navigate = useNavigate();
	return (
		<S.Footer>
			<S.IconContainer>
				<FaDog className="icon" onClick={() => navigate('/posts')} />
				<p>Posts</p>
			</S.IconContainer>
			<S.IconContainer>
				<GiDogHouse
					className="icon"
					onClick={() => navigate('/ongs')}
				/>
				<p>ONGs</p>
			</S.IconContainer>
			<S.IconContainer>
				<CgMenuGridO
					className="icon"
					// onClick={() => navigate('/options')}
				/>
				<p>Options</p>
			</S.IconContainer>
		</S.Footer>
	);
};

export default Footer;
