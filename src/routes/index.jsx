import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import React from 'react';

import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';
import RegisterOng from '../pages/RegisterOng';
import PostsPage from '../pages/PostsPage';
import CreatePostPage from '../pages/CreatePostPage';
import OngsPage from '../pages/OngsPage';

export default function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Navigate to="/sign-in" />} />
				<Route path="/sign-in" element={<SignIn />} />
				<Route path="/sign-up" element={<SignUp />} />
				<Route path="/register/ong" element={<RegisterOng />} />
				<Route path="/posts" element={<PostsPage />} />
				<Route path="/post" element={<CreatePostPage />} />
				<Route path="/ongs" element={<OngsPage />} />
			</Routes>
		</BrowserRouter>
	);
}
