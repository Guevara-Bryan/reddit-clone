import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
	*{
    padding: 0;
	  margin: 0;
	  box-sizing: border-box;
  }

	body{
		overflow: hidden;
		background-color: #1e2536
	}
`;

export const breakpoints = {
	mobile: '480px',
	tablets: '768px',
	laptops: '1024px',
	desktops: '1200px',
};

export default GlobalStyles;
