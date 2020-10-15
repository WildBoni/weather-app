import React, {useEffect} from 'react';
import {ModalProvider} from "./context/modalContext";
import {useDispatch} from 'react-redux';
import {ThemeProvider} from 'styled-components';
import AppRouter from './routers/AppRouter';

import GlobalStyles from './styles/GlobalStyles';
import theme from './styles/theme';

import {loadWeather} from './actions/weather';
import {addToast} from './actions/toasts';
import {apiUrl} from './shared/baseUrls';
import {defaultCities} from './store/defaultCities';
import Toasts from "./components/Toasts";

function App() {
  useEffect(() => {
    fetchDefaultCitiesWeather();
  }, [])
  
  let dispatch = useDispatch()

  let fetchDefaultCitiesWeather = () => Object
    .entries(defaultCities.cities)
    .forEach(([key,val]) => {
      dispatch(loadWeather(`${apiUrl}weather?q=${val.name}&appid=${process.env.REACT_APP_OPENWEATHER_API}&units=metric`))
        .then(
          (res) => dispatch(addToast({text: `${res.name} weather loaded.`})), 
          (err) => dispatch(addToast({text: `${err}.`}))
        )
    });

  return (
    <ThemeProvider theme={theme}>
      <ModalProvider>
        <GlobalStyles/>
        <AppRouter/>
        <Toasts/>
      </ModalProvider>
    </ThemeProvider>
  );
}

export default App;
