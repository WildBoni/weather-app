import * as actionTypes from '../actions/actionTypes';
import {defaultCities} from '../store/defaultCities';
import {produce} from 'immer';

const citiesReducerDefaultState = defaultCities;

export default produce((draft, action) => {
	switch (action.type) {
		case actionTypes.ADD_CITY:
			draft.cities[action.id] = {
				name: action.payload,
				id: action.id
			}
			break;
		case actionTypes.SELECT_CITY:
			draft.selectedCity = action.payload;
			break;
		//TODO: implementing a conditional logic to check if it'a selected city. If true, it needs to be automatically replaced with another one.
		case actionTypes.REMOVE_CITY:
			if (draft.selectedCity === action.payload) {
				delete draft.selectedCity;
			}
			delete draft.cities[action.payload];
			break;
		default: 
			break;
	}
}, citiesReducerDefaultState)