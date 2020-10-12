import React, {useContext, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import styled from 'styled-components';
import{ThemeContext} from 'styled-components';
import moment from 'moment';
import {weatherIconUrl} from '../shared/baseUrls';

import SelectedCity from './SelectedCity';
import {apiUrl} from '../shared/baseUrls';

import {loadWeather} from '../actions/weather';
import {loadForecast} from '../actions/forecast';

const Container = styled.div`
  background: ${props => props.styles.blueGradient};
  padding-bottom: 1px;
`

function MobileSelectedCityContainer(props) {
  const themeContext = useContext(ThemeContext);
  const dispatch = useDispatch();
  const forecast = useSelector(state => state.forecast.details);

  let details = props.location.state.details;
  // const weather = useSelector(state => state.weather.locations[props.match.params.id]);
  useEffect(() => {
    fetchSelectedCityForecast(details.lat,details.lon)
  }, [])

  let fetchSelectedCityForecast = (lat, lon) => dispatch(
    loadForecast(`${apiUrl}onecall?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_OPENWEATHER_API}&units=metric&exclude=minutely,alerts`)
  )

  return(
    <Container styles={themeContext}>
      {
        Object.entries(forecast).map(([key,val]) => {
          let current = val.current;
          let dailyForecast = val.daily;
          let hourlyForecast = val.hourly;
          return (
            <SelectedCity 
              key={key} current={current} 
              dailyForecast={dailyForecast}
              hourlyForecast={hourlyForecast}
              details={details}
            />
          )
        })
      }
      
    </Container>
  )
}

export default MobileSelectedCityContainer;