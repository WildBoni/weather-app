import React from 'react';
import styled from 'styled-components';
import SelectedCityTodayForecast from './SelectedCityTodayForecast';
import ScrollContainer from 'react-indiana-drag-scroll';

const Container = styled(ScrollContainer)`
  @media(min-width:996px) {
    height:313px;
  }
`
const TodayForecast = styled.div`
  color: white;
  cursor: pointer;
  margin: 45px 10px;
  @media(min-width:996px) {
    margin: 30px 10px;
  }
`
const ForecastContainer = styled.div`
  padding: 40px;
  display: flex;
  align-items: center;
  justify-content: start;
  position: relative;
  @media(min-width:996px) {
    flex-direction: column;
    padding: 20px;
	}	
`

function SelectedCityTodayForecastContainer(props) {
  return(
    <Container>
      <TodayForecast>
        <ForecastContainer>
        {
          props.hourlyForecast.map((forecast) => 
              <SelectedCityTodayForecast key={forecast.dt} hourlyForecast={forecast}/>
          )
        }
        </ForecastContainer>
      </TodayForecast>
    </Container>
  )
}

export default SelectedCityTodayForecastContainer;