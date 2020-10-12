import React from 'react';
import styled from 'styled-components';
import{useContext} from 'react';
import{ThemeContext} from 'styled-components';

const Card = styled.div`
  background: ${props => props.styles.sunny};
  border-radius: 25px;
  box-shadow: ${props => props.styles.boxShadow};
  color: white;
  ${'' /* max-width: 180px; */}
  margin: 20px 8px;
  padding: 20px 25px;
  text-align: center;
`
const Day = styled.div`
  font-size: 22px;
  font-weight: 600;
`
const Temperature = styled.div`
  font-size: 36px;
  font-weight: 600;
`

function SelectedCityWeekForecastCard() {
  const themeContext = useContext(ThemeContext);

  return(
    <Card styles={themeContext}>
      <Day>Monday</Day>
      <Temperature>22°</Temperature>
      <img src="https://openweathermap.org/img/wn/01d@2x.png" alt="weather condition" />
    </Card>
  )
}

export default SelectedCityWeekForecastCard;