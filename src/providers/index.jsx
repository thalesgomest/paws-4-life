import React from 'react';
import { AuthProvider } from './AuthProvider';
import { OngProvider } from './OngProvider';

export default function AppProvider({ children }) {
	return (
		<OngProvider>
			<AuthProvider>{children}</AuthProvider>
		</OngProvider>
	);
}
