import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const OngContext = createContext();

export const OngProvider = ({ children }) => {
	function phoneMaskBrazil(phone) {
		phone = phone.replace(/\D/g, '');
		phone = phone.replace(/(^\d{2})(\d)/, '($1) $2');
		phone = phone.replace(/(\d{4,5})(\d{4}$)/, '$1-$2');
		return phone;
	}

	const [ongData, setOngData] = useState({
		name: '',
		telephone: '',
		address: '',
		email: '',
		site: '',
	});

	const [dataLoading, setDataLoading] = useState(false);

	const registerOng = (navigate) => {
		setDataLoading(true);

		const URL = 'http://localhost:5000/register/ong';

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

	return (
		<OngContext.Provider
			value={{
				phoneMaskBrazil,
				ongData,
				setOngData,
				dataLoading,
				registerOng,
			}}
		>
			{children}
		</OngContext.Provider>
	);
};
