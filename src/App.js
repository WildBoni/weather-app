import React from 'react';
import styled from 'styled-components';

import SelectedCityTemperaturePanel from './components/SelectedCityTemperaturePanel';
import MainDisplay from './components/MainDisplay';
import FavCitiesColumn from './components/FavCitiesColumn';
import SelectedCityToday from './components/SelectedCityToday';
import SelectedCityForecast from './components/SelectedCityForecast';
import SearchAndLocateCity from './components/SearchAndLocateCity';

function App() {
  return (
    <>
      <SelectedCityTemperaturePanel/>
      <MainDisplay/>
      <FavCitiesColumn/>
      <SelectedCityToday/>
      <SelectedCityForecast/>
      <SearchAndLocateCity/>
    </>
  );
}

export default App;
