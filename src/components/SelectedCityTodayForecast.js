import React from 'react';
import styled from 'styled-components';
import ScrollContainer from 'react-indiana-drag-scroll';

const TodayForecast = styled.div`
  color: white;
  margin: 45px 10px;
`
const ForecastContainer = styled.div`
  padding: 40px;
  display: flex;
  align-items: center;
  justify-content: start;
  position: relative;
`
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

function SelectedCityTodayForecast() {
  return(
    <ScrollContainer>
    <TodayForecast>
      <ForecastContainer>
        <Forecast>
          <Time>Now</Time>
          <Temperature>20°C</Temperature>
        </Forecast>
        <Line></Line>
        <Forecast>
          <Time>Now</Time>
          <Temperature>20°C</Temperature>
        </Forecast>
        <Line></Line>
        <Forecast>
          <Time>Now</Time>
          <Temperature>20°C</Temperature>
        </Forecast>
        <Line></Line>
        <Forecast>
          <Time>Now</Time>
          <Temperature>20°C</Temperature>
        </Forecast>
        <Line></Line>
      </ForecastContainer>
      {/* <HourlyForecast/> */}
    </TodayForecast>
    </ScrollContainer>
  )
}

export default SelectedCityTodayForecast;