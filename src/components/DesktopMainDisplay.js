import React, {useContext, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import styled from 'styled-components';
import CitiesContainer from './CitiesContainer';
import {loadForecast} from '../actions/forecast';
import {apiUrl} from '../shared/baseUrls';
import SelectedCityDetails from './SelectedCityDetails';
import SelectedCityTemperature from './SelectedCityTemperature';
import DesktopBottomRow from './DesktopBottomRow';
import moment from 'moment';

function DesktopMainDisplay(props) { 
  const dispatch = useDispatch();
  const forecast = useSelector(state => state.forecast.details);
  // Passing default city id
  // TODO: add default id from store file
  useEffect(() => {
    fetchSelectedCityForecast(props.details.lat,props.details.lon)
  }, [])
  
  let fetchSelectedCityForecast = (lat, lon) => dispatch(
    loadForecast(`${apiUrl}onecall?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_OPENWEATHER_API}&units=metric&exclude=minutely,alerts`)
  )

	return (
		<>
			<SelectedCityDetails data={props.details}/>
      <SelectedCityTemperature data={props.details}/>
      <DesktopBottomRow 
        dailyForecast={forecast.result.daily}
        current={forecast.result.current}
        data={props.details}
      />
		</>
	)
}

export default DesktopMainDisplay;