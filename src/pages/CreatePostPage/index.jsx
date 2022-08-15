import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Button } from '../../components/authComponents';

import isLogged from '../../utils/isLogged';
import React, { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { PostContext } from '../../providers/PostProvider';
import * as S from './styles';

const CreatePostPage = () => {
	const navigate = useNavigate();
	const { setPostData, postData, dataLoading, buttonDisabled, createPost } =
		useContext(PostContext);
	const handleCreatePost = (e) => {
		e.preventDefault();
		createPost(() => navigate('/posts'));
	};

	return (
		<>
			<Header />
			<S.CreatePostContainer>
				<h1>New Post</h1>
				<S.Form onSubmit={handleCreatePost}>
					<select
						className="select"
						onChange={(e) =>
							setPostData({
								...postData,
								type: e.target.value,
							})
						}
					>
						<option value="">Chose your type post</option>
						<option value="Rescue">Rescue</option>
						<option value="Lost">Lost</option>
						<option value="Other">Other</option>
					</select>
					<div className="input_container">
						<input
							type="text"
							disabled={dataLoading}
							className={dataLoading ? 'input-disabled' : ''}
							placeholder="Image URL"
							value={postData.image}
							onChange={(e) =>
								setPostData({
									...postData,
									image: e.target.value,
								})
							}
						/>
					</div>
					<div className="input_container">
						<input
							type="text"
							disabled={dataLoading}
							className={dataLoading ? 'input-disabled' : ''}
							placeholder="Name"
							value={postData.name}
							onChange={(e) =>
								setPostData({
									...postData,
									name: e.target.value,
								})
							}
						/>
					</div>
					<div className="input_container">
						<textarea
							disabled={dataLoading}
							className={dataLoading ? 'input-disabled' : ''}
							placeholder="Description"
							required
							value={postData.description}
							onChange={(e) => {
								setPostData({
									...postData,
									description: e.target.value,
								});
							}}
						/>
					</div>
					<Button isLoading={dataLoading} isDisabled={buttonDisabled}>
						Submit
					</Button>
				</S.Form>
			</S.CreatePostContainer>
			<Footer />
		</>
	);
};

export default CreatePostPage;
