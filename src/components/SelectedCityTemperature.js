import React from 'react';
import styled from 'styled-components';

const Panel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  span {
    color: white;
  }
`

function SelectedCityTemperature(props){
  return(
    <Panel>
      <img src={`${props.data.iconUrl}@4x.png`} alt={props.data.weather} />
      <span className="huge-text">22°</span>
    </Panel>
  )
}

export default SelectedCityTemperature;