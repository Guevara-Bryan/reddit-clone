import styled from 'styled-components';

const SNavBar = styled.nav`
	height: 100%;
	padding: 10px 20px;
	font-size: 1.3rem;
	background-color: #1e2536;

	display: flex;
	align-items: center;
	justify-content: space-between;

	.nav-brand {
		width: 90px;
	}

	.h-group{
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 110px;
	}

	.app-button {
		background-color: #ff4500;
		border: none;
		font-size: 0.85rem;
		font-weight: 600;
		padding: 4px 7px;
		border-radius: 20px;
		color: white;
	}
`;

export default SNavBar;
