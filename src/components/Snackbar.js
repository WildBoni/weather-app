import React from 'react';
import {SnackbarContext} from '../context/snackbarContext';


const Snackbar = () => {
  let {state, setState, handleOpen, handleClose, handleSnackbar} = React.useContext(SnackbarContext);
  return(
    <div>
      {state.show && (
        <div>
          <span>
            {state.text}
          </span>
          <button onClick={() => handleSnackbar()}>OK</button>
        </div>
      )}
    </div>
  )
}

export default Snackbar;