import { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import authorizationHeader from '../utils/authorizationHeader';
import getUserData from '../utils/getUserData';

export const PostContext = createContext();

export const PostProvider = ({ children }) => {
	const [allPosts, setAllPosts] = useState([]);
	const [dataLoading, setDataLoading] = useState(false);
	const [buttonDisabled, setButtonDisabled] = useState(true);
	const [postData, setPostData] = useState({
		type: '',
		description: '',
		image: '',
		name: '',
		location: {
			latitude: '',
			longitude: '',
		},
	});
	let authHeader = '';

	const createPost = (navigate) => {
		setDataLoading(true);

		const URL = `${import.meta.env.VITE_URL_DATABASE}/post`;
		authHeader = authorizationHeader(getUserData()?.token);

		if (postData.image === '') {
			postData.image = 'https://i.ibb.co/HnsV3wK/logo.png';
		}

		axios
			.post(URL, postData, authHeader)
			.then(() => {
				setDataLoading(false);
				setPostData({
					type: '',
					description: '',
					image: '',
					name: '',
					location: {
						latitude: '',
						longitude: '',
					},
				});
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

	const getAllPosts = () => {
		const URL = `${import.meta.env.VITE_URL_DATABASE}/post`;
		authHeader = authorizationHeader(getUserData()?.token);
		setDataLoading(true);
		axios
			.get(URL, authHeader)
			.then(({ data }) => {
				setAllPosts(data);
				setDataLoading(false);
			})
			.catch((err) => {
				console.log({
					message:
						'Error getting all posts! Check your data and try again',
					err,
				});
				setDataLoading(false);
			});
	};

	const isButtonDisabled = () => {
		if (postData.type !== '' && postData.description.length > 0) {
			setButtonDisabled(false);
		} else {
			setButtonDisabled(true);
		}
	};

	function success({ coords }) {
		const { latitude, longitude } = coords;
		setPostData({
			...postData,
			location: {
				latitude,
				longitude,
			},
		});
	}

	useEffect(() => {
		if ('geolocation' in navigator) {
			navigator.geolocation.getCurrentPosition(success);
		} else {
			console.log('Usuário não autorizou');
		}
	}, []);

	useEffect(isButtonDisabled, [postData.type, postData.description]);

	return (
		<PostContext.Provider
			value={{
				allPosts,
				getAllPosts,
				dataLoading,
				buttonDisabled,
				postData,
				setPostData,
				createPost,
			}}
		>
			{children}
		</PostContext.Provider>
	);
};
