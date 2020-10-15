import React, {useState, createRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {apiUrl} from '../shared/baseUrls';
import UserGreetings from './UserGreetings';
import CitiesContainer from './CitiesContainer';
import {loadWeather} from '../actions/weather';
import {userName} from '../shared/userName';
import MobileMenuBar from '../components/MobileMenuBar';
import {setTextFilter} from '../actions/filters';
import FilterSelectedCities from '../components/FilterSelectedCities';
import {addToast} from '../actions/toasts';

function MobileHomePage() {
  const [searchbar, setSearchbar] = useState(false);
  let dispatch = useDispatch()
  let textInput = createRef();
  let filters = useSelector(state => state.filters);

  let onTextChange = (e) => {
    dispatch(setTextFilter(e.target.value));
  }

  let hideSearchbar = () => {
    setSearchbar(false);
  }

  let showSearchbar = () => {
    textInput.current.focus();
    setSearchbar(true);
  }
  
  function getGeolocation(e) {
    e.preventDefault();
    if('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        dispatch(loadWeather(`${apiUrl}weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${process.env.REACT_APP_OPENWEATHER_API}&units=metric`))
        .then(
          () => dispatch(addToast({text: 'Your location has been added!'})), 
          () => dispatch(addToast({text: 'City not found.'}))
        )
      });
      //TODO: create a snackbar to show related messages
    } else {
      //TODO: handle devices without geolocation navigator
    }
  }

  return(
    <>
      <UserGreetings utente={userName} />
      <CitiesContainer/>
      <FilterSelectedCities show={searchbar} handleClose={hideSearchbar}>
        <input type="text" placeholder="text: Rome" value={filters.text} onChange={onTextChange} ref={textInput}/>
      </FilterSelectedCities>
      <MobileMenuBar showSearchbar={showSearchbar} geolocation={getGeolocation}/>
    </>
  )
}

export default MobileHomePage;