import React from 'react';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import styled from 'styled-components';

const Greet = styled.div`
  text-align: center;
  margin: 50px 10px;
  color: ${props => props.styles.blue};
`

function UserGreetings(props) {
  const themeContext = useContext(ThemeContext);

  return(
    <Greet styles={themeContext}>
      <h1>Good Morning!<br/>
        {props.utente}
      </h1>
    </Greet>
  )
}

export default UserGreetings;