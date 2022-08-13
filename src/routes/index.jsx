import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import React from 'react';

import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';
import RegisterOng from '../pages/RegisterOng';
import PostsPage from '../pages/PostsPage';

export default function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Navigate to="/sign-in" />} />
				<Route path="/sign-in" element={<SignIn />} />
				<Route path="/sign-up" element={<SignUp />} />
				<Route path="/register/ong" element={<RegisterOng />} />
				<Route path="/posts" element={<PostsPage />} />
			</Routes>
		</BrowserRouter>
	);
}
