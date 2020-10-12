import React from 'react';
import styled from 'styled-components';

const Panel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  span {
    color: white;
  }
`

function SelectedCityTemperature(props){
  console.log(props)
  return(
    <Panel>
      <img src="https://openweathermap.org/img/wn/01d@4x.png" alt="weather condition" />
      <span className="huge-text">22°</span>
    </Panel>
  )
}

export default SelectedCityTemperature;