import React from 'react';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import styled from 'styled-components';

function AddCity() {
	const themeContext = useContext(ThemeContext);

	const Button = styled.button`
		align-items: center;
		border: none;
		color: ${themeContext.blue};
		display: flex;
		font-size: ${themeContext.bigger};
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
	return(
		<Button>
			Aggiungi città
		</Button>
	)
}

export default AddCity;