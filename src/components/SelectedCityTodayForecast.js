import React from 'react';
import styled from 'styled-components';
import ScrollContainer from 'react-indiana-drag-scroll';
import moment from 'moment';

const Forecast = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border: 15px solid white;
  border-radius: 50%;
`
const Time = styled.div`
  position: absolute;
  top: -40px;
  font-size: 12px;
  font-weight: 300;
`
const Temperature = styled.div`
  position: absolute;
  top: 25px;
  font-size: 20px;
  font-weight: 300;
`
const Line = styled.div`
  flex-grow: 1;
  height: 4px;
  max-width:200px;
  min-width:100px;
  background-color: white;
`

function SelectedCityTodayForecast(props) {
  let hourlyForecast = props.hourlyForecast;
  let hour = moment.unix(hourlyForecast.dt).format('kk:mm');
  let temperature = Math.round(hourlyForecast.temp);
  return(
    <>
      <Forecast>
        <Time>{hour}</Time>
        <Temperature>{temperature}°</Temperature>
      </Forecast>
      <Line></Line>
    </>
  )
}

export default SelectedCityTodayForecast;