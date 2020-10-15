import * as actionTypes from './actionTypes';
import { addToast } from "./toasts";

//LOAD WEATHER
export const loadWeatherRequest = city => ({
  type: actionTypes.LOAD_WEATHER_REQUEST,
  payload: city
})

export const loadWeatherSuccess = details => ({
  type: actionTypes.LOAD_WEATHER_SUCCESS,
  payload: details
})

export const loadWeatherFailure = err => ({
  type: actionTypes.LOAD_WEATHER_FAILURE,
  payload: err
})

// export const loadWeatherAndToast = details => dispatch => {
//   dispatch(loadWeatherSuccess(details));
//   dispatch(addToast({text: "aaa"}));
// }

export const loadWeather = city => dispatch => {
  dispatch(loadWeatherRequest(city));
  fetch(city)
    .then(response => {
      if(response.ok) {
        return response;
      } else {
        let error = new Error(`Error ${response.cod}: ${response.message}`);
        error.response = response;
        throw error;
      }
    }, 
    error => {
      let errorMessage = new Error(error.message);
      throw errorMessage;
    })
    .then(response => response.json())
    .then(details => dispatch(loadWeatherSuccess(details)))
    .catch(err => dispatch(loadWeatherFailure(err)))
}

//REMOVE WEATHER LOCATION
export const startRemoveWeatherLocation = id => dispatch => {
  dispatch(removeWeatherLocation(id));
}

let removeWeatherLocation = (id) => ({
  type: actionTypes.REMOVE_WEATHER_LOCATION,
  payload: id
})