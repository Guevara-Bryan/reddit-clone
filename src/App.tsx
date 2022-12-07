import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import PageNotFound404 from './error/PageNotFound404';

import Frame from './app/Frame';
import PostsList from './features/posts/PostsList';

import GlobalStyles from './styles/layout/GlobalStyles';

const App = () => {
	return (
		<>
			<GlobalStyles />
			<Router>
				<Routes>
					<Route path='/' element={<Frame />}>
						<Route index element={<PostsList />} />
					</Route>
					<Route path='*' element={<PageNotFound404 />} />
				</Routes>
			</Router>
		</>
	);
};

export default App;
