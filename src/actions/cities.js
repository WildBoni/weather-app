import * as actionTypes from './actionTypes';

//SELECT CITY
export const selectCity = (id) => ({
	type: actionTypes.SELECT_CITY,
  payload: id
})
