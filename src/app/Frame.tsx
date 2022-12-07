import React from 'react';

import NavBar from './NavBar';

import { Outlet } from 'react-router-dom';

import MainGrid from '../styles/layout/MainGrid';

const Frame = () => {
	return (
		<MainGrid>
			<NavBar />
			<div>
				<Outlet />
			</div>
		</MainGrid>
	);
};

export default Frame;
