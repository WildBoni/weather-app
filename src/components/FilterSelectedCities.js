import React from 'react';
import styled from 'styled-components';
import {ThemeContext} from 'styled-components';

const Modal = styled.div`
  display: ${props => props.visibility ? 'block' : 'none'};
  margin: 0 auto
`

function FilterSelectedCities({handleClose, show, children}) {
  return(
    <Modal visibility={show}>
      {children}
      <button onClick={handleClose}>Close</button>
    </Modal>
  )
}

export default FilterSelectedCities;