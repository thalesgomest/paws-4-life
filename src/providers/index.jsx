import React from 'react';
import { AuthProvider } from './AuthProvider';
import { OngProvider } from './OngProvider';
import { PostProvider } from './PostProvider';

export default function AppProvider({ children }) {
	return (
		<PostProvider>
			<OngProvider>
				<AuthProvider>{children}</AuthProvider>
			</OngProvider>
		</PostProvider>
	);
}
