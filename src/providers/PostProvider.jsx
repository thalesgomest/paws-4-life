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
		location: {
			latitude: '',
			longitude: '',
		},
	});
	let authHeader = '';

	const createPost = (navigate) => {
		setDataLoading(true);

		const URL = 'http://localhost:5000/post';
		authHeader = authorizationHeader(getUserData()?.token);

		axios
			.post(URL, postData, authHeader)
			.then(() => {
				setDataLoading(false);
				setPostData({
					type: '',
					description: '',
					image: '',
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
		const URL = 'http://localhost:5000/post';
		authHeader = authorizationHeader(getUserData()?.token);
		setDataLoading(true);
		axios
			.get(URL, authHeader)
			.then(({ data }) => {
				data = data.reverse();
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
		if (postData.type.length > 0) {
			if (postData.description.length > 0 && postData.image.length > 0) {
				setButtonDisabled(false);
			}
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

	function error(err) {
		console.warn(`ERROR(${err.code}): ${err.message}`);
	}

	useEffect(() => {
		if ('geolocation' in navigator) {
			navigator.geolocation.watchPosition(success, error, {
				timeout: 30000,
				enableHighAccuracy: true,
				maximumAge: 30000,
			});
		} else {
			console.log('Usuário não autorizou');
		}
	}, [location]);

	useEffect(isButtonDisabled, [
		postData.type,
		postData.description,
		postData.image,
	]);

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
