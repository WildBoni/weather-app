import React from 'react';
import styled from 'styled-components';

function HourlyForecast() {
  const Timeline = styled.div`
  `
  const Section = styled.section`
  `
  const Temperature = styled.h3`
    position: relative;
    width: 50%;  
    box-sizing: border-box;
    display: inline-block;
    margin: 0;
    padding: 0;
    border-right: 2px solid black;
    padding-bottom: 10px;
    &:after {
      width: 20px;
      height: 20px;
      background: blue;
      position: absolute;
      top: 0;
      right: -10px;
      content:'';
    }
  `
  const Time = styled.h5`
    width: 50%;
    box-sizing: border-box;
    display: inline-block;
    margin: 0;
    padding: 0 0 0 20px;
  `

  return (
    <Timeline>
      <Section>
        <Temperature>22°C</Temperature>
        <Time>2.00pm</Time>
      </Section>
    </Timeline>
  )
}

function SelectedCityToday() {
  const Today = styled.div`
    width: 22%;
  `
  
  return(
    <Today>
      <h2>Today</h2>
      <HourlyForecast/>
      <HourlyForecast/>
      <HourlyForecast/>
    </Today>
  )
}

export default SelectedCityToday;