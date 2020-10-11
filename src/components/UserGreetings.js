import React from 'react';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import styled from 'styled-components';

function UserGreetings(props) {
  const themeContext = useContext(ThemeContext);

  const Greet = styled.div`
    text-align: center;
    margin: 50px 10px;
    color: ${themeContext.blue};
  `
  return(
    <Greet>
      <h1>Good Morning!<br/>
        {props.utente}
      </h1>
    </Greet>
  )
}

export default UserGreetings;