import React, { useContext } from 'react';
import { IoMdPaw } from 'react-icons/io';
import { TbLogout } from 'react-icons/tb';
import * as S from './styles';
import { AuthContext } from '../../providers/AuthProvider';
import { useNavigate } from 'react-router-dom';
import getUserData from '../../utils/getUserData';

const Header = () => {
	const navigate = useNavigate();
	const { logout } = useContext(AuthContext);
	const handleLogout = () => {
		logout(() => navigate('/sign-in'));
	};
	const userData = getUserData();
	return (
		<S.Header>
			<div className="user-info">
				<IoMdPaw className="icon" onClick={() => navigate('/post')} />
				<span>Olá, {userData.name}</span>
			</div>
			<TbLogout className="icon" onClick={handleLogout} />
		</S.Header>
	);
};

export default Header;
