import React, {useEffect, useState} from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {createBrowserHistory} from 'history';
import Media from 'react-media';
import MobileMenuBar from '../components/MobileMenuBar';
import MobileHomePage from '../components/MobileHomePage';
import MobileSelectedCityContainer from '../components/MobileSelectedCityContainer';
import FilterSelectedCities from '../components/FilterSelectedCities';
// import Modal from '../components/Modal';
import {loadWeather} from '../actions/weather';
// import {addCity, removeCity} from './actions/cities';
import {apiUrl} from '../shared/baseUrls';
import {defaultCities} from '../store/defaultCities';
import {setTextFilter} from '../actions/filters';
import filters from '../reducers/filters';

export const history = createBrowserHistory();

const AppRouter = () => {
  const [modal, setModal] = useState(false);
  let dispatch = useDispatch()
  let filters = useSelector(state => state.filters);

  function getGeolocation(e) {
    e.preventDefault();
    if('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        dispatch(loadWeather(`${apiUrl}weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${process.env.REACT_APP_OPENWEATHER_API}&units=metric`));
      });
      //TODO: create a snackbar to show related messages
    } else {
      //TODO: handle devices without geolocation navigator
    }
  }

  let onTextChange = (e) => {
    dispatch(setTextFilter(e.target.value));
  }

  let showModal = () => {
    setModal(true);
  }

  let hideModal = () => {
    setModal(false);
  }
  
  return( 
    <Router history={history}>
      <div>
        <Switch>
          <Route 
            path="/" 
            render={(props) => (
              <MobileHomePage {...props}/>
            )}
          />
          <Route path="/city/:id" component={MobileSelectedCityContainer}/>
        </Switch>
        <FilterSelectedCities show={modal} handleClose={hideModal}>
          <input type="text" placeholder="text: Rome" value={filters.text} onChange={onTextChange}/>
        </FilterSelectedCities>
        <Media query="(max-width: 576px)">
          {matches =>
            matches ? (
              <MobileMenuBar showModal={showModal} geolocation={getGeolocation}/>
            ) : (
              <div>dfssdf</div>
            )
          }
        </Media>
      </div>
    </Router>
  )
};

export default AppRouter;