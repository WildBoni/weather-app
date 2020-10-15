import React, {useContext} from 'react';
import {ThemeContext} from 'styled-components';
import styled from 'styled-components';

const Content = styled.div`
	margin: 20px 0 20px 20px;
`
const Title = styled.h2`
	color: ${props => props.styles.blue};
	font-size: 28px;
	padding: 20px;
`
const Button = styled.button`
	border-radius: 25px;
	border: none;
	background: radial-gradient(circle, #5374E7 0%, #77B9F5 100%);
	box-shadow: 5px 10px 20px 0 rgba(0,0,0,0.17);
	color: white;
	cursor: pointer;
	font-size: 28px;
	width: 100%;
	padding: 28px;
	img {
		display: block;
		margin: 0 auto;
		padding-bottom: 10px;
	}
	&:focus {
		outline: none;
	}
`

function AddLocalization(props) {
	const themeContext = useContext(ThemeContext); 
	return(
		<Content>
			<Title styles={themeContext}>Localization</Title>
			<Button onClick={props.geolocation}>
				<img src="../images/LocationWhite.png" alt="Location icon"/>
				Add Localization
			</Button>
		</Content>
	)
}

export default AddLocalization;