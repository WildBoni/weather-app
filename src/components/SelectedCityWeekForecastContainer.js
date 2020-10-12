import React from 'react';
import styled from 'styled-components';
import SelectedCityWeekForecastCard from './SelectedCityWeekForecastCard';
import ScrollContainer from 'react-indiana-drag-scroll';

const CardContainer = styled.div`
  display: flex;
  margin: 20px 0 20px 20px;
`

function SelectedCityWeekForecastContainer() {
  return(
    <ScrollContainer>
      <CardContainer>
        <SelectedCityWeekForecastCard/>
        <SelectedCityWeekForecastCard/>
        <SelectedCityWeekForecastCard/>
        <SelectedCityWeekForecastCard/>
        <SelectedCityWeekForecastCard/>
        <SelectedCityWeekForecastCard/>
        <SelectedCityWeekForecastCard/>
      </CardContainer>
    </ScrollContainer>
  )
}

export default SelectedCityWeekForecastContainer;