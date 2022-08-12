import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BiUserCircle } from 'react-icons/bi';
import { FiMail } from 'react-icons/fi';
import { IoEarthOutline } from 'react-icons/io5';
import { BiHomeHeart } from 'react-icons/bi';
import { BsTelephone } from 'react-icons/bs';
import * as S from './styles';
import { AuthContext } from '../../providers/AuthProvider';
import { OngContext } from '../../providers/OngProvider';
import Paws4LifeLogo from '../../assets/images/paws4life-logo.svg';
import { Button } from '../../components/authComponents';

export default function RegisterOng() {
	const { phoneMaskBrazil, ongData, setOngData, dataLoading, registerOng } =
		useContext(OngContext);
	const navigate = useNavigate();

	const handleRegisterOng = async (e) => {
		e.preventDefault();
		registerOng(() => navigate('/sign-in'));
	};

	return (
		<S.OngContainer>
			<img className="logo" src={Paws4LifeLogo} alt="paws-4-life-logo" />
			<h1>Register your ONG</h1>
			<S.Form onSubmit={handleRegisterOng}>
				<div className="input_container">
					<input
						type="text"
						disabled={dataLoading}
						className={dataLoading ? 'input-disabled' : ''}
						placeholder="Name"
						required
						value={ongData.name}
						onChange={(e) =>
							setOngData({
								...ongData,
								name: e.target.value,
							})
						}
					/>
					<BiUserCircle className="icon_input" />
				</div>
				<div className="input_container">
					<input
						type="text"
						maxLength={15}
						disabled={dataLoading}
						className={dataLoading ? 'input-disabled' : ''}
						placeholder="Telephone"
						required
						value={ongData.telephone}
						onChange={(e) =>
							setOngData({
								...ongData,
								telephone: phoneMaskBrazil(e.target.value),
							})
						}
					/>
					<BsTelephone className="icon_input" />
				</div>
				<div className="input_container">
					<input
						type="text"
						disabled={dataLoading}
						className={dataLoading ? 'input-disabled' : ''}
						placeholder="Address"
						required
						value={ongData.address}
						onChange={(e) => {
							setOngData({
								...ongData,
								address: e.target.value,
							});
						}}
					/>
					<BiHomeHeart className="icon_input" />
				</div>
				<div className="input_container">
					<input
						type="email"
						disabled={dataLoading}
						placeholder="E-mail"
						required
						value={ongData.email}
						onChange={(e) => {
							setOngData({
								...ongData,
								email: e.target.value,
							});
						}}
					/>
					<FiMail className="icon_input" />
				</div>
				<div className="input_container">
					<input
						type="text"
						disabled={dataLoading}
						placeholder="Site"
						required
						value={ongData.site}
						onChange={(e) => {
							setOngData({
								...ongData,
								site: e.target.value,
							});
						}}
					/>
					<IoEarthOutline className="icon_input" />
				</div>
				<Button isLoading={dataLoading}>Register Now</Button>
			</S.Form>
			<Link to="/sign-in">
				<p>Already have a account? Sign in</p>
			</Link>
		</S.OngContainer>
	);
}
