import React, {useContext, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import styled from 'styled-components';
import{ThemeContext} from 'styled-components';
import moment from 'moment';
import {weatherIconUrl} from '../shared/baseUrls';

import MobileMenuBar from './MobileMenuBar';
import SelectedCity from './SelectedCity';
import {apiUrl} from '../shared/baseUrls';

import {loadWeather} from '../actions/weather';
import {loadForecast} from '../actions/forecast';

const Container = styled.div`
  background: ${props => props.styles.blueGradient};
  padding-bottom: 1px;
`

function MobileSelectedCityContainer(props) {
  useEffect(() => {
    fetchSelectedCityForecast(51.51,-0.13)
  }, [])
  const themeContext = useContext(ThemeContext);
  const dispatch = useDispatch();
  const forecast = useSelector(state => state.forecast.details);

  let fetchSelectedCityForecast = (lat, lon) => dispatch(
    loadForecast(`${apiUrl}onecall?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_OPENWEATHER_API}&units=metric&exclude=minutely,alerts`)
  )
  
  function getGeolocation(e) {
    e.preventDefault();
    if('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        dispatch(loadWeather(`${apiUrl}weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${process.env.REACT_APP_OPENWEATHER_API}&units=metric`));
      });
      //TODO: create a snackbar to show related messages
    } else {
      //TODO: handle devices without geolocation navigator
    }
  }

  return(
    <Container styles={themeContext}>
      {
        Object.entries(forecast).map(([key,val]) => {
          console.log(key,val)
          let data = {}
          // let data = {
          //   name: val.city.name,
          //   weather: val.list[0].weather[0].main,
          //   icon: val.list[0].weather[0].icon,
          //   iconUrl: `${weatherIconUrl}${val.list[0].weather[0].icon}@2x.png`,
          //   time: moment.unix(val.list[0].dt).format('dddd D, MMMM'),
          //   hour: moment.unix(val.list[0].dt).format('kk:mm a')
          // }
          // let forecast = val.list
          return <SelectedCity key={key} data={data} forecast={forecast}/>
        })
      }
      <MobileMenuBar geolocation={getGeolocation}/>
    </Container>
  )
}

export default MobileSelectedCityContainer;