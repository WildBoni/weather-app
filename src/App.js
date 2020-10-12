import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {ThemeProvider} from 'styled-components';

import GlobalStyles from './styles/GlobalStyles';
import theme from './styles/theme';

import {loadWeather} from './actions/weather';
// import {addCity, removeCity} from './actions/cities';

import {apiUrl} from './shared/baseUrls';
import {defaultCities} from './store/defaultCities';

import MobileHomePage from './components/MobileHomePage';
import MobileSelectedCityContainer from './components/MobileSelectedCityContainer';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    fetchDefaultCitiesWeather();
  }, [])

  let fetchDefaultCitiesWeather = () => Object
    .entries(defaultCities.cities)
    .forEach(([key,val]) => {
      dispatch(loadWeather(`${apiUrl}weather?q=${val.name}&appid=${process.env.REACT_APP_OPENWEATHER_API}&units=metric`))
    });

  // let addCity = (cityId) => dispatch(addCity(cityId));
  // let removeCity = (cityId) => dispatch(removeCity(cityId));

  return (
    <ThemeProvider theme={theme}>
        <GlobalStyles/>
        <MobileHomePage/>
        <MobileSelectedCityContainer/>
    </ThemeProvider>
  );
}

export default App;
