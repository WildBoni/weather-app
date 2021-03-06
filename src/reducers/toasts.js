import * as actionTypes from '../actions/actionTypes';
import {produce} from 'immer';

const initialState = []

export default produce((draft, action) => {
  switch (action.type) {
    case actionTypes.ADD_TOAST:
      draft.push(action.payload);
      break;
    case actionTypes.REMOVE_TOAST:
      return draft.filter(toast => toast.id !== action.payload)
    default:
      break;
  }
}, initialState)
