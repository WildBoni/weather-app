import React from 'react';
import styled from 'styled-components';

function SelectedCityTemperaturePanel(){
  const Panel = styled.div`
    position: absolute;
    top: 20px;
    left: 0px;
  `
  
  return(
    <Panel>
      <h2>22°</h2>
    </Panel>
  )
}

export default SelectedCityTemperaturePanel;