import React from 'react';
import styled from 'styled-components';

const Modal = styled.div`

`

function FilterSelectedCities({children}) {
  return(
    <Modal>
      {children}
    </Modal>
  )
}

export default FilterSelectedCities;