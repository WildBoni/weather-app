import React from 'react';
import moment from 'moment';

let SelectedCityTodayDetails = (props) => {
  let todayForecast = props.current;
  let todayDetails = props.data;
  let day = moment.unix(todayForecast.dt).format('ddd, DD MMM');
  let temperature = Math.round(todayForecast.temp);
  let windSpeed = todayForecast.wind_speed;
  let highTemp = todayDetails.maxTemperature; 
  let lowTemp = todayDetails.minTemperature; 
  let humidity = todayForecast.humidity;
  let uv = todayForecast.uvi; 
  let dewPoint = Math.round(todayForecast.dew_point);
  return(
    <>
      <div>
        <h3>{day}</h3>
        <img src="../images/wind.png" alt="wind icon"/>
      </div>
      <div>
        <h2>{temperature}°</h2>
        <p>Wind: {windSpeed} m/s</p>
        <p>The high temperature will be {highTemp}°C, the low will be {lowTemp}°C</p>
        <p>Humidity: {humidity}%</p>
        <p>UV: {uv}</p>
        <p>Dew point: {dewPoint}°C</p>
      </div>
    </>
  )
}

export default SelectedCityTodayDetails;