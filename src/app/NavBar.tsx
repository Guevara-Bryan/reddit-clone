import React from 'react';

import SNavBar from '../styles/navigation/SNavBar.js';
import redditLogo from '../assets/Reddit_Lockup_OnDark.png';

import MenuIcon from '../components/MenuIcon.js';

const NavBar = () => {
	const promptAppDownload = () => {
		window.open('https://apps.apple.com/us/app/reddit/id1064216828', '_self');
	};

	return (
		<SNavBar>
			<img className='nav-brand' src={redditLogo} alt='' />
			<div className='h-group'>
				<button className='app-button' onClick={promptAppDownload}>
					Use App
				</button>
				<MenuIcon />
			</div>
		</SNavBar>
	);
};
export default NavBar;
