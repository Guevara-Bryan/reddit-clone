import styled from 'styled-components';

const Icon = styled.div`
	width: 20px;
	height: 17px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
`;

const Bar = styled.div`
	height: 1.5px;
	width: ${(props: { short: string }) => (props.short ? '15px' : '20px')};
	background-color: white;
`;

const MenuIcon = () => {
	return (
		<Icon>
			<Bar short></Bar>
			<Bar></Bar>
			<Bar short></Bar>
		</Icon>
	);
};

export default MenuIcon;
