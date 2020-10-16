import React, {useContext} from 'react';
import styled, {ThemeContext} from 'styled-components';
import {useSelector} from 'react-redux';
import SelectedCityTodayForecastContainer from './SelectedCityTodayForecastContainer';
import SelectedCityTabs from './SelectedCityTabs';

const Container = styled.div`
  display: flex;
`
const StyledContainer = styled.div`
  margin: 45px 10px 0 0;
  width: 25%;
`
const Title = styled.h2`
  color: ${props => props.styles.blue};
	font-size: 28px;
  padding: 18px 20px 16px 20px;
`
const ForecastContainer = styled.div`
  background: radial-gradient(circle, #5374E7 0%, #77B9F5 100%);
  box-shadow: 5px 10px 20px 0 rgba(0,0,0,0.17);
  border-radius: 25px;
  height: 314px;
`
const StyledTabs = styled.div`
  margin: 25px 0 0 10px;
  width: 75%;
`

function DesktopBottomRow(props) {
  const themeContext = useContext(ThemeContext);
  const forecast = useSelector(state => state.forecast.details.result);
  return (
    <Container>
      <StyledContainer>
        <Title styles={themeContext}>Temps</Title>
        <ForecastContainer>
          <SelectedCityTodayForecastContainer hourlyForecast={forecast.hourly}/>
        </ForecastContainer>
      </StyledContainer>
      <StyledTabs>
        <SelectedCityTabs current={forecast.current} data={props.data}/>
      </StyledTabs>
    </Container>
  )
}

export default DesktopBottomRow;