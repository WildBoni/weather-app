import React, {useState} from 'react';

const DEFAULT_STATE = {
  show: false,
  text: "sdfafsda",
  timeOut: 2000
}

export default () => {
  let [state, setState] = useState(DEFAULT_STATE)

  let handleOpen = (text) => {
    setState({
      ...state,
      show: true,
      text
    })
    setTimeout(
      () => setState({...state, show: false}),
      state.timeOut
    )
  }

  let handleClose = () => {
    setState({
      ...state,
      show: false,
      text: ''
    })
  }

  let handleSnackbar = (text) => {
    setState({
      ...state,
      text,
      show: !state.show
    })
    setTimeout(
      () => setState({...state, show: false}),
      state.timeOut
    )
  }

  return {state, setState, handleOpen, handleClose, handleSnackbar};
}