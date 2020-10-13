import * as actionTypes from './actionTypes';

let id = 0;

const defaultOptions = {
  color: "#6796e6"
};

export const addToast = (options={}) => ({
  payload: createToast(options),
  type: actionTypes.ADD_TOAST
})

export const removeToast = (id) => ({
  payload: id,
  type: actionTypes.REMOVE_TOAST
})

export const createToast = options => ({
  ...defaultOptions,
  ...options,
  id: id++
})