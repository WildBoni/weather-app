import React, {useEffect} from 'react';
import { ModalProvider } from "./context/modalContext";
import {useDispatch} from 'react-redux';
import {ThemeProvider} from 'styled-components';
import AppRouter, { history } from './routers/AppRouter';

import GlobalStyles from './styles/GlobalStyles';
import theme from './styles/theme';

import {loadWeather} from './actions/weather';
// import {addCity, removeCity} from './actions/cities';
import {apiUrl} from './shared/baseUrls';
import {defaultCities} from './store/defaultCities';

function App() {
  useEffect(() => {
    fetchDefaultCitiesWeather();
  }, [])
  
  let dispatch = useDispatch()

  let fetchDefaultCitiesWeather = () => Object
    .entries(defaultCities.cities)
    .forEach(([key,val]) => {
      dispatch(loadWeather(`${apiUrl}weather?q=${val.name}&appid=${process.env.REACT_APP_OPENWEATHER_API}&units=metric`))
    });

  // let addCity = (cityId) => dispatch(addCity(cityId));
  // let removeCity = (cityId) => dispatch(removeCity(cityId));

  return (
    <ThemeProvider theme={theme}>
      <ModalProvider>
        <GlobalStyles/>
        <AppRouter />
      </ModalProvider>
    </ThemeProvider>
  );
}

export default App;
