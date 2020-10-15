import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import SelectedCityDetails from './SelectedCityDetails';
import SelectedCityTemperature from './SelectedCityTemperature';
import SelectedCityTodayForecastContainer from './SelectedCityTodayForecastContainer';
import SelectedCityWeekForecastContainer from './SelectedCityWeekForecastContainer';
import {ModalContext} from "../context/modalContext";

const BackButton = styled.button`
  background: none;
  border: none;
  position: absolute;
  left: 20px;
  top: 25px;
  cursor:pointer;
  &:focus {
    outline: 0;
  }
`
const AddButton = styled.button`
  background: none;
  border: none;
  position: absolute;
  cursor:pointer;
  right: 20px;
  top: 25px;
  &:focus {
    outline: 0;
  }
`

function SelectedCity(props) {
  let {handleModal} = React.useContext(ModalContext);
  
  return(
    <>
      <Link to="/">
        <BackButton>
          <img src="../images/ArrowLeft.png" alt="Left arrow"/>
        </BackButton>
      </Link>
      <AddButton onClick={() => handleModal('Type a city')}>
        <img src="../images/PlusWhite.png" alt="Plus icon"/>
      </AddButton>
      <SelectedCityDetails data={props.details}/>
      <SelectedCityTemperature data={props.details}/>
      <SelectedCityTodayForecastContainer hourlyForecast={props.hourlyForecast}/>
      <SelectedCityWeekForecastContainer dailyForecast={props.dailyForecast}/>
    </>
  )
}

export default SelectedCity;