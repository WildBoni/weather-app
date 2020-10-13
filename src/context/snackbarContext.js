import React, {createContext} from "react";
import useSnackbar from "../hooks/useSnackbar";
import Snackbar from "../components/Snackbar";

const SnackbarContext = createContext();

let SnackbarProvider = ({children}) => {
  let {state, setState, handleOpen, handleClose, handleSnackbar} = useSnackbar();
  
  return(
    <SnackbarContext.Provider
      value={{state, setState, handleOpen, handleClose, handleSnackbar}}
    >
      <Snackbar/>
      {children}
    </SnackbarContext.Provider>
  )
}

export {SnackbarContext, SnackbarProvider};