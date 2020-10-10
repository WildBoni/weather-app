import React from 'react';

import {useDispatch} from 'react-redux';
import {loadWeather} from './actions/weather.js';
import {loadForecast} from './actions/forecast.js';
import {addCity, removeCity} from './actions/cities.js';

import {baseUrl} from './shared/baseUrl.js';
import {defaultCities} from './store/defaultCities.js';

function App() {
  const dispatch = useDispatch();
  // let city = 'ROME'

  let fetchDefaultCitiesWeather = () => Object
    .entries(defaultCities.cities)
    .forEach(([key,val]) => {
      dispatch(loadWeather(`${baseUrl}weather?q=${val.name}&appid=${process.env.REACT_APP_OPENWEATHER_API}`))
    });

  return (
    <div>
        <button 
          onClick={() => dispatch(
            loadForecast(`${baseUrl}forecast?q=MADRID&appid=${process.env.REACT_APP_OPENWEATHER_API}`)
          )} type="button">
            forecast
        </button>
        <button onClick={() => fetchDefaultCitiesWeather()} type="button">add default cities weather</button>
        <button onClick={() => dispatch(addCity('PARIS'))} type="button">add city</button>
        <button onClick={() => dispatch(removeCity(997))} type="button">remove city</button>
    </div>
  );
}

export default App;
