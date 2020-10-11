import * as actionTypes from './actionTypes';

//TEXT FILTER
export const setTextFilter = (text = '') => ({
  type: actionTypes.SET_TEXT_FILTER,
  payload: text
})