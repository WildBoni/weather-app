import React, {useContext, useEffect} from 'react';
import styled from 'styled-components';
import {useDispatch, useSelector} from 'react-redux';
import SelectedCityTodayForecastContainer from './SelectedCityTodayForecastContainer';
import SelectedCityTabs from './SelectedCityTabs';

const Container = styled.div`
  display: flex;
`
const StyledContainer = styled.div`
  width: 25%;
  @media(min-width:996px) {
    background: radial-gradient(circle, #5374E7 0%, #77B9F5 100%);
    box-shadow: 5px 10px 20px 0 rgba(0,0,0,0.17);
    border-radius: 25px;
    height: 340px;
	}	
`
const StyledTabs = styled.div`
width: 75%;
`

function DesktopBottomRow(props) {
  const dispatch = useDispatch();
  const forecast = useSelector(state => state.forecast.details.result);
  return (
    <Container>
      <StyledContainer>
        <SelectedCityTodayForecastContainer hourlyForecast={forecast.hourly}/>
      </StyledContainer>
      <StyledTabs>
        <SelectedCityTabs current={forecast.current} data={props.data}/>
      </StyledTabs>
    </Container>
  )
}

export default DesktopBottomRow;