import React from 'react';
import {useContext} from 'react';
import {ThemeContext} from 'styled-components';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Article = styled.article`
	align-items: center;
	background: ${props => props.styles[props.cardColor]};
	color: white;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	margin: 20px;	
	padding: 25px;	
`

const Details = styled.div`
	flex-basis: 0;
	flex-grow: 1;
`

const Weather = styled.div`
	flex-basis: 0;
	flex-grow: 1;
	text-align: center;
`

const Temperature = styled.div`
	flex-basis: 0;
	flex-grow: 1;
	text-align: right;
`

function CitiesListItem(props) {
	const themeContext = useContext(ThemeContext);
	let details = props.details;
	let cardColor = '';
	switch (details.icon) {
		case '01d':
		case '01n':
			cardColor = 'sunny';
			break;
		case '02d':
		case '02n':
		case '10d':
		case '10n':
			cardColor = 'mixed';
			break;
		case '03d':
		case '03n':
		case '04d':
		case '04n':
		case '09d':
		case '09n':
		case '11d':
		case '11n':
		case '13d':
		case '13n':
		case '50d':
		case '50n':
			cardColor = 'cloudy';
			break;
		default:
			cardColor = 'sunny';
			break;
	}

	return(
		<Link to={{
			pathname: `/city/${details.id}`,
			state: { 
				details
			}
		}}>
			<Article className="city-box" styles={themeContext} cardColor={cardColor}>
				<Details>
					<h2>{details.name}</h2>
					<p>{details.time}</p>
					<p className="small-text">{details.hour}</p>
				</Details>
				<Weather>
					<img src={`${details.iconUrl}@2x.png`} alt={details.weather}/>
				</Weather>
				<Temperature className="big-text">
					{details.temperature}°
				</Temperature>
			</Article>
		</Link>
	)
}

export default CitiesListItem;