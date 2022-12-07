import styled from 'styled-components';

const SPost = styled.div`
	padding: 11px;
	display: grid;
	grid-template-rows: 1fr 2fr 1fr;
	grid-template-columns: 1fr;
	grid-template-areas: 'header' 'content' 'footer';

	background-color: white;

	border-top: 2px solid #d7dfe2;
	border-bottom: 2px solid #d7dfe2;
`;

export default SPost;
