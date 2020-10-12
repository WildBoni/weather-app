import * as actionTypes from './actionTypes';

//LOAD FORECAST
export const loadForecastRequest = url => ({ 
  type: actionTypes.LOAD_FORECAST_REQUEST,
  payload: url
})

export const loadForecastSuccess = details => ({
  type: actionTypes.LOAD_FORECAST_SUCCESS,
  payload: details
})

export const loadForecastFailure = err => ({
  type: actionTypes.LOAD_FORECAST_FAILURE,
  payload: err,
  error: true
})

export const loadForecast = url => dispatch => {
  dispatch(loadForecastRequest(url));
  fetch(url)
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
    .then(details => dispatch(loadForecastSuccess(details)))
    .catch(err => dispatch(loadForecastFailure(err)))
}
