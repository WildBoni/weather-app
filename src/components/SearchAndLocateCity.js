import React from 'react';

function Search() {
  return (
    <div>
      <h2>Search</h2>
      <input type="text"></input>
      <button>Search</button>
    </div>
  )
}

function Localization() {
  return (
    <div>
      <h2>Localize</h2>
      <button>Localize</button>
    </div>
  )
}

function SelectedCityToday() {
  return (
    <>
      <Search/>
      <Localization/>
    </>
  )
}

export default SelectedCityToday;