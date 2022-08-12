import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BiUserCircle } from 'react-icons/bi';
import { FiMail } from 'react-icons/fi';
import { MdOutlineLock } from 'react-icons/md';
import * as S from './styles';
import { AuthContext } from '../../providers/AuthProvider';
import Paws4LifeLogo from '../../assets/images/paws4life-logo.svg';
import { Button } from '../../components/authComponents';

export default function SignUp() {
	const { signUp, buttonDisabled, borderIsRed, data, setData, dataLoading } =
		useContext(AuthContext);
	const navigate = useNavigate();

	const handleSignUp = async (e) => {
		e.preventDefault();
		signUp(() => navigate('/sign-in'));
	};

	return (
		<S.SignUpContainer>
			<img className="logo" src={Paws4LifeLogo} alt="paws-4-life-logo" />
			<h1>Paws 4 Life</h1>
			<S.Form onSubmit={handleSignUp}>
				<div className="input_container">
					<input
						type="text"
						disabled={dataLoading}
						className={dataLoading ? 'input-disabled' : ''}
						placeholder="Name"
						required
						value={data.name}
						onChange={(e) =>
							setData({ ...data, name: e.target.value })
						}
					/>
					<BiUserCircle className="icon_input" />
				</div>
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
				<div className="input_container">
					<input
						type="password"
						disabled={dataLoading}
						className={borderIsRed()}
						placeholder="Confirm Password"
						required
						value={data.confirmPassword}
						onChange={(e) => {
							setData({
								...data,
								confirmPassword: e.target.value,
							});
						}}
					/>
					<MdOutlineLock className="icon_input" />
				</div>
				<Button isLoading={dataLoading} isDisabled={buttonDisabled}>
					Sign up now
				</Button>
			</S.Form>
			<Link to="/sign-in">
				<p>Already have a account? Sign in</p>
			</Link>
			<Link to="/register/ong">
				<p>Register your ONG</p>
			</Link>
		</S.SignUpContainer>
	);
}
