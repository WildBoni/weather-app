import React from 'react';

function SelectedCityForecast() {
  return(
    <div>
      <div>
        <button>This week</button>
        <button>This month</button>
      </div>
      <div>
        <div>
          <h4>Day</h4>
          <h3>22°</h3>
        </div>
        <div>
          <h4>Day</h4>
          <h3>22°</h3>
        </div>
        <div>
          <h4>Day</h4>
          <h3>22°</h3>
        </div>
      </div>
      <div>
        <h3>Day</h3>
        <h4>C°</h4>
        <h5>Intensity</h5>
        <h5>High-low</h5>
        <h5>Hum</h5>
        <h5>Uv</h5>
        <h5>Dew</h5>
      </div>
    </div>
  )
}

export default SelectedCityForecast;