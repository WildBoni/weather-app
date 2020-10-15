import * as actionTypes from './actionTypes';

let id = 0;

const defaultOptions = {
  color: "#6796e6"
};

export const addToast = (options={}) => dispatch => {
  dispatch(createToast(options));
  let toastId = id-1;
  setTimeout(
    () => {
      dispatch(removeToast(toastId))
    },
    3000
  )
}

export const removeToast = (id) => ({
  payload: id,
  type: actionTypes.REMOVE_TOAST
})

export const createToast = options => ({
  type: actionTypes.ADD_TOAST,
  payload: {
    ...defaultOptions,
    ...options,
    id: id++
  }
})