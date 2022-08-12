import React from 'react';
import GlobalStyle from './assets/styles';
import Router from './routes';
import AppProvider from './providers';

function App() {
	return (
		<AppProvider>
			<GlobalStyle />
			<Router />
		</AppProvider>
	);
}

export default App;
