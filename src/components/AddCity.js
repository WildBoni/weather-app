import React, {useContext} from 'react';
import styled, {ThemeContext} from 'styled-components';
import {ModalContext} from "../context/modalContext";

const Button = styled.button`
	align-items: center;
	background-color: transparent;
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
	@media(min-width:996px) {
		margin: 0 auto;
	}	
`

function AddCity(props) {
	let {handleModal} = useContext(ModalContext);
	const themeContext = useContext(ThemeContext);
	
	return(
		<>
			<Button styles={themeContext}
				onClick={() => handleModal('Type a city')}
			>
				Aggiungi città
			</Button>
		</>
	)
}

export default AddCity;