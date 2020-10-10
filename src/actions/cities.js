import * as actionTypes from './actionTypes';

// mocking id - NOT FOR PRODUCTION
// TODO: use a proper id generator
let fakeId = () => new Date().getTime();

//ADD CITY
export const addCity = city => ({
  type: actionTypes.ADD_CITY,
  payload: city,
	id: fakeId()
})

//SELECT CITY
export const selectCity = (id) => ({
	type: actionTypes.SELECT_CITY,
  payload: id
})

//REMOVE CITY - possible new feature for removing a city from the list
export const removeCity = (id) => ({
	type: actionTypes.REMOVE_CITY,
	payload: id
})
