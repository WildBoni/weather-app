import React from 'react';
import {useDispatch} from 'react-redux';
import {ThemeProvider} from 'styled-components';

import GlobalStyles from './styles/GlobalStyles';
import theme from './styles/theme';

import {loadWeather} from './actions/weather';
import {loadForecast} from './actions/forecast';
import {addCity, removeCity} from './actions/cities';

import {apiUrl} from './shared/baseUrls';
import {defaultCities} from './store/defaultCities';

import MobileHomePage from './components/MobileHomePage';

function App() {
  const dispatch = useDispatch();

  let fetchDefaultCitiesWeather = () => Object
    .entries(defaultCities.cities)
    .forEach(([key,val]) => {
      dispatch(loadWeather(`${apiUrl}weather?q=${val.name}&appid=${process.env.REACT_APP_OPENWEATHER_API}&units=metric`))
    });

  let fetchSelectedCityForecast = () => dispatch(
    loadForecast(`${apiUrl}forecast?q=MADRID&appid=${process.env.REACT_APP_OPENWEATHER_API}&units=metric`)
  )

  let addCity = () => dispatch(addCity('PARIS'))

  let removeCity = () => dispatch(removeCity(997))

  fetchDefaultCitiesWeather()
  // fetchSelectedCityForecast()
  // addCity()
  // removeCity()

  return (
    <ThemeProvider theme={theme}>
      <div>
        <GlobalStyles/>
        <MobileHomePage/>
      </div>
    </ThemeProvider>
  );
}

export default App;
