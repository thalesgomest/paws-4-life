import React from 'react';
import { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, MarkerF } from '@react-google-maps/api';
import * as S from './styles';

const Map = () => {
	const [location, setLocation] = useState({});

	function success({ coords }) {
		const { latitude, longitude } = coords;
		setLocation({
			...location,
			lat: latitude,
			lng: longitude,
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
	}, []);

	return (
		<LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAP_KEY}>
			<GoogleMap
				mapContainerStyle={S.mapContainerStyle}
				zoom={15}
				center={location}
			>
				<MarkerF
					position={location}
					icon={'https://i.ibb.co/h14P0xJ/paw-marker.png'}
				/>
			</GoogleMap>
		</LoadScript>
	);
};

export default Map;
