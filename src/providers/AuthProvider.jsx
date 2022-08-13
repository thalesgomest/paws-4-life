import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

import setUserData from '../utils/setUserData';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [signUpData, setSignUpData] = useState({
		name: '',
		email: '',
		password: '',
		confirmPassword: '',
	});
	const [signInData, setSignInData] = useState({
		email: '',
		password: '',
	});
	const [dataLoading, setDataLoading] = useState(false);
	const [buttonDisabled, setButtonDisabled] = useState(true);

	const signIn = (navigate) => {
		setDataLoading(true);
		axios
			.post(`http://localhost:5000/signin`, {
				email: signInData.email,
				password: signInData.password,
			})
			.then(({ data }) => {
				setDataLoading(false);
				setUserData(data);
				navigate();
			})
			.catch((err) => {
				setDataLoading(false);
				console.log({
					message:
						'Sign In error! Check your credentials and try again',
					err,
				});
			});
	};

	const signUp = (navigate) => {
		setDataLoading(true);

		const URL = 'http://localhost:5000/signup';

		axios
			.post(URL, {
				name: signUpData.name,
				email: signUpData.email,
				password: signUpData.password,
				confirmPassword: signUpData.confirmPassword,
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
		const arePasswordsEqual = () =>
			signUpData.confirmPassword === signUpData.password;
		const isConfirmPasswordEmpty = () => signUpData.confirmPassword === '';
		if (!isConfirmPasswordEmpty() && arePasswordsEqual()) {
			setButtonDisabled(false);
		} else {
			setButtonDisabled(true);
		}
	};
	const borderIsRed = () => {
		const arePasswordsEqual = () =>
			signUpData.confirmPassword === signUpData.password;

		if (arePasswordsEqual() && dataLoading) {
			return 'input_disabled';
		}
		if (
			!arePasswordsEqual() &&
			!dataLoading &&
			signUpData.confirmPassword.length > 0
		) {
			return 'error_password';
		}
		if (!arePasswordsEqual() && dataLoading) {
			return 'error_password input_disabled';
		}
		return '';
	};

	const logout = (navigate) => {
		localStorage.removeItem('userData');
		navigate();
	};

	useEffect(isButtonDisabled, [
		signUpData.password,
		signUpData.confirmPassword,
	]);

	return (
		<AuthContext.Provider
			value={{
				signIn,
				signUp,
				isButtonDisabled,
				buttonDisabled,
				borderIsRed,
				signUpData,
				setSignUpData,
				signInData,
				setSignInData,
				dataLoading,
				logout,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};
