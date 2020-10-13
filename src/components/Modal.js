import React from 'react';
import styled from 'styled-components';
import { ModalContext } from "../context/modalContext";


const Content = styled.div`
  margin: 0 auto
`

function Modal() {
  
  let {modalContent, handleModal, modal, addCity, handleChange} = React.useContext(ModalContext);
  if(modal) {
    return(
      <Content>
        {modalContent}
        <input type="text" onChange={(e) => handleChange(e)}/>
        <button onClick={() => addCity()}>Add</button>
        <button onClick={() => handleModal()}>Close</button>
      </Content>
    )
    } else return null;
}

export default Modal;