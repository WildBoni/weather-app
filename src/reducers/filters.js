import * as actionTypes from '../actions/actionTypes';
import {produce} from 'immer';

const filtersReducerDefaultState = {
  text: ''
}

export default produce((draft, action) => {
  switch (action.type) {
    case actionTypes.SET_TEXT_FILTER:
      draft.text = action.payload;
      break;
    default:
      break;
  }
}, filtersReducerDefaultState)