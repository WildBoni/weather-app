import React, {createContext} from "react";
import useModal from "../hooks/useModal";
import Modal from "../components/Modal";

let ModalContext  = createContext();

let ModalProvider = ({children}) => {
  let {modal, handleModal, modalContent, addCity, handleChange} = useModal();
  return (
    <ModalContext.Provider value={{modal, handleModal, modalContent, addCity, handleChange}}>
      <Modal/>
      {children}
    </ModalContext.Provider>
  )
}

export {ModalContext, ModalProvider};