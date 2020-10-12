import React from 'react';
import styled from 'styled-components';

import SelectedCityDetails from './SelectedCityDetails';
import SelectedCityTemperature from './SelectedCityTemperature';
import SelectedCityTodayForecast from './SelectedCityTodayForecast';
import SelectedCityWeekForecastContainer from './SelectedCityWeekForecastContainer';

const BackButton = styled.button`
  background: none;
  border: none;
  position: absolute;
  left: 20px;
  top: 25px;
  &:focus {
    outline: 0;
  }
`

const AddButton = styled.button`
  background: none;
  border: none;
  position: absolute;
  right: 20px;
  top: 25px;
  &:focus {
    outline: 0;
  }
`

function SelectedCity(props) {
  return(
    <>
      <BackButton>
        <img src="images/ArrowLeft.png" alt="Left arrow"/>
      </BackButton>
      <AddButton>
        <img src="images/PlusWhite.png" alt="Plus icon"/>
      </AddButton>
      <SelectedCityDetails data={props}/>
      <SelectedCityTemperature data={props}/>
      <SelectedCityTodayForecast hourlyForecast={props.hourlyForecast}/>
      <SelectedCityWeekForecastContainer dailyForecast={props.dailyForecast}/>
    </>
  )
}

export default SelectedCity;