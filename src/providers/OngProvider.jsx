import { createContext, useState } from 'react';
import axios from 'axios';
import authorizationHeader from '../utils/authorizationHeader';
import getUserData from '../utils/getUserData';

export const OngContext = createContext();

export const OngProvider = ({ children }) => {
	function phoneMaskBrazil(phone) {
		phone = phone.replace(/\D/g, '');
		phone = phone.replace(/(^\d{2})(\d)/, '($1) $2');
		phone = phone.replace(/(\d{4,5})(\d{4}$)/, '$1-$2');
		return phone;
	}

	const [allOngs, setAllOngs] = useState([]);
	const [ongData, setOngData] = useState({
		name: '',
		telephone: '',
		address: '',
		email: '',
		site: '',
	});

	let authHeader = '';

	const [dataLoading, setDataLoading] = useState(false);

	const registerOng = (navigate) => {
		setDataLoading(true);

		const URL = `${import.meta.env.VITE_URL_DATABASE}/register/ong`;

		axios
			.post(URL, {
				name: ongData.name,
				telephone: ongData.telephone,
				address: ongData.address,
				email: ongData.email,
				site: ongData.site,
			})
			.then(() => {
				setDataLoading(false);
				navigate();
			})
			.catch((err) => {
				console.log({
					message:
						'Register ONG error! Check your data and try again',
					err,
				});
			})
			.finally(() => {
				setDataLoading(false);
			});
	};

	const getAllOngs = () => {
		const URL = `${import.meta.env.VITE_URL_DATABASE}/ongs`;
		authHeader = authorizationHeader(getUserData()?.token);

		axios
			.get(URL, authHeader)
			.then(({ data }) => {
				setAllOngs(data);
			})
			.catch((err) => {
				console.log({
					message:
						'Error getting all posts! Check your data and try again',
					err,
				});
			});
	};

	return (
		<OngContext.Provider
			value={{
				phoneMaskBrazil,
				ongData,
				setOngData,
				dataLoading,
				registerOng,
				getAllOngs,
				allOngs,
			}}
		>
			{children}
		</OngContext.Provider>
	);
};
