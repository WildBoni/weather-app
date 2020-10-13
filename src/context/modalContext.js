import React, {createContext} from "react";
import useModal from "../hooks/useModal";
import Modal from "../components/Modal";

let ModalContext;
let {Provider} = (ModalContext = createContext());

let ModalProvider = ({children}) => {
  let {modal, handleModal, modalContent, addCity, handleChange} = useModal();
  return (
    <Provider value={{modal, handleModal, modalContent, addCity, handleChange}}>
      <Modal/>
      {children}
    </Provider>
  )
}

export {ModalContext, ModalProvider};