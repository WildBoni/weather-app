import React from 'react';
import styled from 'styled-components';

const Content = styled.div`
  display: ${props => props.visibility ? 'block' : 'none'};
  margin: 0 auto;
  padding: 30px 0 0 0;
  text-align: center;
  input {
    padding: 10px 10px;
    font-size: 18px;
  }
  button {
    padding: 12px 30px;
    font-size: 18px;
    background-color: #15908c;
    border: none;
    color: white;
    cursor: pointer;
    &:hover {
      background-color: #065856;
    }
  }
`

function FilterSelectedCities({handleClose, show, children}) {
  return(
    <Content visibility={show}>
      {children}
      <button onClick={handleClose}>Close</button>
    </Content>
  )
}

export default FilterSelectedCities;