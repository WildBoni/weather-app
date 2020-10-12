import React from 'react';
import styled from 'styled-components';
import{useContext} from 'react';
import{ThemeContext} from 'styled-components';
import moment from 'moment';
import {weatherIconUrl} from '../shared/baseUrls';

const Card = styled.div`
  background: ${props => props.styles[props.cardColor]};
  border-radius: 25px;
  box-shadow: ${props => props.styles.boxShadow};
  color: white;
  grow: 1;
  margin: 20px 8px;
  padding: 20px 25px;
  text-align: center;
`
const Day = styled.div`
  font-size: 22px;
  font-weight: 600;
`
const Temperature = styled.div`
  font-size: 36px;
  font-weight: 600;
`

function SelectedCityWeekForecastCard(props) {
  const themeContext = useContext(ThemeContext);

  let cardColor = '';
	switch (props.weather) {
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
  
  let dailyForecast = props.dailyForecast;
  let day = moment.unix(dailyForecast.dt).format('dddd');
  let temperature = Math.round(dailyForecast.temp.day);
  let iconUrl = `${weatherIconUrl}${dailyForecast.weather[0].icon}`;
  return(
    <Card styles={themeContext}>
      <Day>{day}</Day>
      <Temperature>{temperature}°</Temperature>
      <img src={`${iconUrl}@2x.png`} alt={dailyForecast.weather[0].description} />
    </Card>
  )
}

export default SelectedCityWeekForecastCard;