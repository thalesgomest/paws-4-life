import React from 'react';
import * as S from './styles';
import Map from '../GoogleMap';
import dayjs from 'dayjs';
import { HiOutlineTrash } from 'react-icons/hi';
import getUserData from '../../utils/getUserData';

const Post = ({ data }) => {
	const userData = getUserData();
	return (
		<>
			<S.PostContainer>
				<S.PostDataUpside>
					<S.PostImage src={data.image} />
					<S.PostInformation>
						<p>
							Type: <span>{data.type}</span>
						</p>
						<p>
							Name: <span>{data.name}</span>
						</p>
						<p>
							Date:{' '}
							<span>
								{dayjs(data.createdAt).format('DD/MM/YYYY')}
							</span>
						</p>
					</S.PostInformation>
					{userData.userId === data.userId ? (
						<HiOutlineTrash className="icon" />
					) : (
						<></>
					)}
				</S.PostDataUpside>
				<S.PostDataDownSide>
					<p>Description:</p>
					<span>{data.description}</span>
					<p>Google Location:</p>
				</S.PostDataDownSide>
				<S.MapContainer>
					<Map coords={data.location} />
				</S.MapContainer>
			</S.PostContainer>
		</>
	);
};

export default Post;
