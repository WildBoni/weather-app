import * as actionTypes from '../actions/actionTypes';
import produce from 'immer';

const initialState = {
  details: {},
  isLoading: false,
  error: null
}

export default produce((draft, action) => {
  switch (action.type) {
    case actionTypes.LOAD_FORECAST_REQUEST:
      draft.isLoading = true;
      draft.error = null;
      break;
    case actionTypes.LOAD_FORECAST_SUCCESS:
      draft.details['result'] = action.payload;
      draft.isLoading = false;
      draft.error = null;
      break;
    case actionTypes.LOAD_FORECAST_FAILURE:
      draft.isLoading = false;
      draft.error = action.payload;
      break;
    default:
      break;
  }
}, initialState)
