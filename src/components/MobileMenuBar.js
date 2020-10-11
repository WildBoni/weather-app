import React from 'react';
import{useContext} from 'react';
import {ThemeContext} from 'styled-components';
import styled from 'styled-components';

function MobileMenuBar() {
  const themeContext = useContext(ThemeContext);

  const Menu = styled.nav`
    background-color: white;
    border-radius: 25px;
    display: flex;
    justify-content: space-evenly;
    list-style-type: none;
    margin: 30px 20px;
    padding: 0 25px;
  `
  const Item = styled.button.attrs(props => ({
    underline: props.underline || '0'
  }))`
    border: none;
    border-bottom: ${props => props.underline} solid ${themeContext.blue};
    background-color: white;
    display: inline;
    flex-grow: 1;
    max-width: 75px;
    padding: 25px;
    text-align: center;
    &:focus {
			outline: 0;
		}
  `
  
  return(
    <Menu>
      <Item underline="2px">
        <img src="images/Home.png" alt="Home" />
      </Item>
      <Item>
        <img src="images/Search.png" alt="Search" />
      </Item>
      <Item>
        <img src="images/Location.png" alt="Location" />
      </Item>
    </Menu>
  )
}

export default MobileMenuBar;