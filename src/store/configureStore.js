import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import citiesReducer from '../reducers/cities';
import weatherReducer from '../reducers/weather';
import forecastReducer from '../reducers/forecast';
import filtersReducer from '../reducers/filters';
import toastsReducer from '../reducers/toasts';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      cities: citiesReducer,
      weather: weatherReducer,
      forecast: forecastReducer,
      filters: filtersReducer,
      toasts: toastsReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
}
