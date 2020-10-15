import React, {useContext} from 'react';
import{ThemeContext} from 'styled-components';
import styled from 'styled-components';
import moment from 'moment';

const Article = styled.article`
	color: white;
	padding-top: 20px;
	h1 {
		font-size: 32px;
		font-weight: 600;
		text-align: center;
	}
	h2 {
		font-size: 20px;
		text-align: center;
	}
	h3 {
		font-size: 20px;
		font-weight: 300;
		text-align: center;
	}
	@media (min-width: 996px) {
		background-image: url("../images/background.jpg");
		background-size: cover;
		background-repeat: no-repeat;
		background-position: left bottom;
		border-radius: ${props => props.styles.borderRadius};
		box-shadow: 5px 10px 20px 0 rgba(0,0,0,0.17);
		color: ${props => props.styles.blue};
		height: 300px;
		padding: 50px 0 50px 150px;
		h1, h2, h3 {
			text-align: left;
		}
	}
`
function SelectedCityDetails(props) {
	const themeContext = useContext(ThemeContext); 
	return (
		<Article styles={themeContext}>
			<h1>{props.data.name}</h1>
			<h2>{props.data.time}</h2>
			<h3>{props.data.weather}</h3>
		</Article>
	) 
}

export default SelectedCityDetails;