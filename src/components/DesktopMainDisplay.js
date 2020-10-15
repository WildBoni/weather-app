import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {loadForecast} from '../actions/forecast';
import {apiUrl} from '../shared/baseUrls';
import SelectedCityDetails from './SelectedCityDetails';
import SelectedCityTemperature from './SelectedCityTemperature';
import DesktopBottomRow from './DesktopBottomRow';
import {addToast} from '../actions/toasts';

function DesktopMainDisplay(props) { 
  const dispatch = useDispatch();
  const forecast = useSelector(state => state.forecast.details);

  useEffect(() => {
    fetchSelectedCityForecast(props.details.lat,props.details.lon)
  }, [])
  
  let fetchSelectedCityForecast = (lat, lon) => dispatch(
    loadForecast(`${apiUrl}onecall?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_OPENWEATHER_API}&units=metric&exclude=minutely,alerts`)
  ).then(
    (res) => dispatch(addToast({text: `${props.details.name} forecast loaded.`})), 
    (err) => dispatch(addToast({text: `${err}.`}))
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