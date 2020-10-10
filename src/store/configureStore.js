import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import citiesReducer from '../reducers/cities';
import weatherReducer from '../reducers/weather';
import forecastReducer from '../reducers/forecast';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      cities: citiesReducer,
      weather: weatherReducer,
      forecast: forecastReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
}
