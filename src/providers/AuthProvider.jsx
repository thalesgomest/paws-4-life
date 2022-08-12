/* eslint-disable no-undef */
import { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import setUserData from '../utils/setUserData';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [data, setData] = useState({
		name: '',
		email: '',
		password: '',
		confirmPassword: '',
	});
	const [dataLoading, setDataLoading] = useState(false);
	const [buttonDisabled, setButtonDisabled] = useState(true);
	const signIn = (email, password) => {
		axios
			.post(`https://localhost:5000/signin`, {
				email,
				password,
			})
			.then(({ data }) => {
				setUserData(data);
			});
	};

	const logout = () => {
		localStorage.removeItem('userData');
	};

	const signUp = (navigate) => {
		setDataLoading(true);

		const URL = 'http://localhost:5000/signup';

		axios
			.post(URL, {
				name: data.name,
				email: data.email,
				password: data.password,
				confirmPassword: data.confirmPassword,
			})
			.then(() => {
				setDataLoading(false);
				navigate();
			})
			.catch((err) => {
				console.log({
					message:
						'Sign Up error! Check your credentials and try again',
					err,
				});
			})
			.finally(() => {
				setDataLoading(false);
			});
	};

	const isButtonDisabled = () => {
		const arePasswordsEqual = () => data.confirmPassword === data.password;
		const isConfirmPasswordEmpty = () => data.confirmPassword === '';
		if (!isConfirmPasswordEmpty() && arePasswordsEqual()) {
			setButtonDisabled(false);
		} else {
			setButtonDisabled(true);
		}
	};
	const borderIsRed = () => {
		const arePasswordsEqual = () => data.confirmPassword === data.password;

		if (arePasswordsEqual() && dataLoading) {
			return 'input_disabled';
		}
		if (
			!arePasswordsEqual() &&
			!dataLoading &&
			data.confirmPassword.length > 0
		) {
			return 'error_password';
		}
		if (!arePasswordsEqual() && dataLoading) {
			return 'error_password input_disabled';
		}
		return '';
	};
	useEffect(isButtonDisabled, [data.password, data.confirmPassword]);

	return (
		<AuthContext.Provider
			value={{
				signIn,
				signUp,
				isButtonDisabled,
				buttonDisabled,
				borderIsRed,
				data,
				setData,
				dataLoading,
				logout,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};
