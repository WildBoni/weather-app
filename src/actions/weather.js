import * as actionTypes from './actionTypes';

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

export const loadWeather = city => dispatch => {
  dispatch(loadWeatherRequest(city));
  return new Promise((resolve, reject) => {
    fetch(city)
      .then(response => {
        if(response.ok) {
          return response;
        } else {
          let error = `Error: ${response.statusText}`;
          throw error;
        }
      }, 
      error => {
        let errorMessage = new Error(error.message);
        throw errorMessage;
      })
      .then(response => response.json())
      .then(details => {
        dispatch(loadWeatherSuccess(details));
        resolve(details)
      })
      .catch(err => {
        dispatch(loadWeatherFailure(err))
        reject(err)
      })
    })
}

//REMOVE WEATHER LOCATION
export const startRemoveWeatherLocation = id => dispatch => {
  return new Promise((resolve, reject) => {
    dispatch(removeWeatherLocation(id))
      .then(resolve());
  })
}

let removeWeatherLocation = (id) => ({
  type: actionTypes.REMOVE_WEATHER_LOCATION,
  payload: id
})