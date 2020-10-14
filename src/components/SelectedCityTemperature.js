import React from 'react';
import styled from 'styled-components';
import{useContext} from 'react';
import {ThemeContext} from 'styled-components';

const Panel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  span {
    color: white;
  } 
  @media (min-width: 996px) {
    border-radius: 0 25px 25px 0;
    box-shadow: 5px 10px 20px 0 rgba(0,0,0,0.17);
    display: flex;
    top: 90px;
    left: -50px;
    flex-direction: column;
    padding: 25px;
    position: absolute;
    background: ${props => props.styles.blueGradient};

    img {
      order: 2;
      width: 85px;
    }

    span {
      font-size: 50px;
    }
  }
`

function SelectedCityTemperature(props){
  const themeContext = useContext(ThemeContext);

  return(
    <Panel styles={themeContext}>
      <img src={`${props.data.iconUrl}@4x.png`} alt={props.data.weather} />
      <span className="huge-text">{props.data.temperature}°</span>
    </Panel>
  )
}

export default SelectedCityTemperature;