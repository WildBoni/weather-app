import * as actionTypes from '../actions/actionTypes';
import {defaultCities} from '../store/defaultCities';
import {produce} from 'immer';

const citiesReducerDefaultState = defaultCities;

export default produce((draft, action) => {
	switch (action.type) {
		case actionTypes.SELECT_CITY:
			draft.selectedCity = action.payload;
			break;
		default: 
			break;
	}
}, citiesReducerDefaultState)