import React from 'react';
import styled from 'styled-components';
import SelectedCityTodayForecast from './SelectedCityTodayForecast';
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

function SelectedCityTodayForecastContainer(props) {
  return(
    <ScrollContainer>
      <TodayForecast>
        <ForecastContainer>
        {
          props.hourlyForecast.map((forecast) => 
              <SelectedCityTodayForecast key={forecast.dt} hourlyForecast={forecast}/>
          )
        }
        </ForecastContainer>
      </TodayForecast>
    </ScrollContainer>
  )
}

export default SelectedCityTodayForecastContainer;