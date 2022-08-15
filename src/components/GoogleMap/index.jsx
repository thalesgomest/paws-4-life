import React from 'react';
import { useEffect, useState, useCallback } from 'react';
import { GoogleMap, LoadScript, MarkerF } from '@react-google-maps/api';

const Map = ({ coords }) => {
	const [location, setLocation] = useState({});

	useEffect(() => {
		setLocation({
			...location,
			lat: coords.latitude,
			lng: coords.longitude,
		});
	}, []);

	return (
		<LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAP_KEY}>
			<GoogleMap
				mapContainerStyle={{
					height: '100%',
					width: '100%',
					border: `2px solid #8C5D42`,
					borderRadius: '10px',
				}}
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
