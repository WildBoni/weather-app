import * as actionTypes from '../actions/actionTypes';
import produce from 'immer';

const initialState = {
  locations: {},
  isLoading: false,
  error: null
}

export default produce((draft, action) => {
  switch (action.type) {
    case actionTypes.LOAD_WEATHER_REQUEST:
      draft.isLoading = true;
      draft.error = null;
      break;
    case actionTypes.LOAD_WEATHER_SUCCESS:
      draft.locations[action.payload.id] = action.payload;
      draft.isLoading = false;
      draft.error = null;
      break;
    case actionTypes.LOAD_WEATHER_FAILURE:
      draft.isLoading = false;
      draft.error = action.payload;
      break;
    case actionTypes.REMOVE_WEATHER_LOCATION:
      delete draft.locations[action.payload];
      break;
    default:
      break;
  }
}, initialState)
