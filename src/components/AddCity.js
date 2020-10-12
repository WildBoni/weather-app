import React from 'react';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import styled from 'styled-components';

const Button = styled.button`
	align-items: center;
	border: none;
	color: ${props => props.styles.blue};
	display: flex;
	font-size: ${props => props.styles.bigger};
	font-weight: 600;
	margin: 30px auto;
	&:before { 
		content: url(/images/Plus.png); 
		padding-right: 15px;
	}
	&:focus {
		outline: 0;
	}
`

function AddCity() {
	const themeContext = useContext(ThemeContext);

	return(
		<Button styles={themeContext}>
			Aggiungi città
		</Button>
	)
}

export default AddCity;