import React, { useContext } from 'react';
import { IoMdPaw } from 'react-icons/io';
import { TbLogout } from 'react-icons/tb';
import * as S from './styles';
import { AuthContext } from '../../providers/AuthProvider';
import { useNavigate } from 'react-router-dom';

const Header = () => {
	const navigate = useNavigate();
	const { logout } = useContext(AuthContext);
	const handleLogout = () => {
		logout(() => navigate('/sign-in'));
	};
	return (
		<S.Header>
			<IoMdPaw className="icon" onClick={() => navigate('/post')} />
			<TbLogout className="icon" onClick={handleLogout} />
		</S.Header>
	);
};

export default Header;
