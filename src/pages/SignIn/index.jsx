import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiMail } from 'react-icons/fi';
import { MdOutlineLock } from 'react-icons/md';
import * as S from './styles';
import { AuthContext } from '../../providers/AuthProvider';
import Paws4LifeLogo from '../../assets/images/paws4life-logo.svg';
import { Button } from '../../components/authComponents';

export default function SignIn() {
	const { SignIn, buttonDisabled, data, setData, dataLoading } =
		useContext(AuthContext);
	const navigate = useNavigate();

	const handleSignIn = async (e) => {
		e.preventDefault();
		SignIn(() => navigate('/sign-in'));
	};

	return (
		<S.SignInContainer>
			<img className="logo" src={Paws4LifeLogo} alt="paws-4-life-logo" />
			<h1>Paws 4 Life</h1>
			<S.Form onSubmit={handleSignIn}>
				<div className="input_container">
					<input
						type="email"
						disabled={dataLoading}
						className={dataLoading ? 'input-disabled' : ''}
						placeholder="E-mail"
						required
						value={data.email}
						onChange={(e) =>
							setData({ ...data, email: e.target.value })
						}
					/>
					<FiMail className="icon_input" />
				</div>
				<div className="input_container">
					<input
						type="password"
						disabled={dataLoading}
						className={dataLoading ? 'input-disabled' : ''}
						placeholder="Password"
						required
						value={data.password}
						onChange={(e) => {
							setData({
								...data,
								password: e.target.value,
							});
						}}
					/>
					<MdOutlineLock className="icon_input" />
				</div>
				<Button isLoading={dataLoading} isDisabled={buttonDisabled}>
					Sign In now
				</Button>
			</S.Form>
			<Link to="/sign-up">
				<p>Don't have a account? Sign up now!</p>
			</Link>
		</S.SignInContainer>
	);
}
