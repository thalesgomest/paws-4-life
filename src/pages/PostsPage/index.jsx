import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Post from '../../components/Post';
import isLogged from '../../utils/isLogged';
import React, { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { PostContext } from '../../providers/PostProvider';
import * as S from './styles';

const PostsPage = () => {
	const navigate = useNavigate();
	const { getAllPosts, allPosts } = useContext(PostContext);
	useEffect(() => {
		if (!isLogged()) {
			navigate('/sign-in');
		}
		getAllPosts();
	}, []);
	return (
		<>
			<Header />
			<S.PostContainer>
				{allPosts.reverse().map((post) => (
					<Post key={post.id} data={post} />
				))}
			</S.PostContainer>
			<Footer />
		</>
	);
};

export default PostsPage;
