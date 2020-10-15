import React, {useContext, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import styled from 'styled-components';
import{ThemeContext} from 'styled-components';
import SelectedCity from './SelectedCity';
import {apiUrl} from '../shared/baseUrls';
import {loadForecast} from '../actions/forecast';
import {addToast} from '../actions/toasts';

const Container = styled.div`
  background: ${props => props.styles.blueGradient};
  min-height: 100vh;
  padding-bottom: 30px;
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
  ).then(
    (res) => dispatch(addToast({text: `${details.name} forecast loaded.`})), 
    (err) => dispatch(addToast({text: `${err}.`}))
  )

  return(
    <Container styles={themeContext}>
      <SelectedCity 
              dailyForecast={forecast.result.daily}
              hourlyForecast={forecast.result.hourly}
              details={details}
            />
    </Container>
  )
}

export default MobileSelectedCityContainer;