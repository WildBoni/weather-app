import React from 'react';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import styled from 'styled-components';
import { ModalContext } from "../context/modalContext";

const Button = styled.button`
	align-items: center;
	border: none;
	color: ${props => props.styles.blue};
	cursor:pointer;
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

function AddCity(props) {
	let {handleModal} = React.useContext(ModalContext);
	const themeContext = useContext(ThemeContext);
	
	return(
		<>
			<Button styles={themeContext}
				onClick={() => handleModal('Select a city')}
			>
				Aggiungi città
			</Button>
		</>
	)
}

export default AddCity;