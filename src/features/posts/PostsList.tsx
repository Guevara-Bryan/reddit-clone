import React from 'react';

import { useAppSelector } from '../../app/hooks';

import SPost from '../../styles/posts/SPost';
const PostsList = () => {
	const posts = useAppSelector((state) => state.posts);

	const renderedPosts = posts.map((post) => {
		return (
			<SPost key={post.id} className='post-card'>
				<h2 id='post-title'>{post.title}</h2>
				<p id='post-content'>{post.content}</p>
				<div></div>
			</SPost>
		);
	});

	return <section>{renderedPosts}</section>;
};

export default PostsList;
