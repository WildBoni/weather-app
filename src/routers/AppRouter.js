import React, {useEffect, useState} from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {createBrowserHistory} from 'history';
import Media from 'react-media';

import MobileHomePage from '../components/MobileHomePage';
import MobileSelectedCityContainer from '../components/MobileSelectedCityContainer';
import FilterSelectedCities from '../components/FilterSelectedCities';
import DesktopHomePage from '../components/DesktopHomePage';
// import Modal from '../components/Modal';
import {loadWeather} from '../actions/weather';
// import {addCity, removeCity} from './actions/cities';

import {defaultCities} from '../store/defaultCities';
import {setTextFilter} from '../actions/filters';
import filters from '../reducers/filters';

export const history = createBrowserHistory();

const AppRouter = () => {
  return( 
    <Router history={history}>
      <div>
        <Media query="(min-width: 997px)">
          {matches => matches ? (
            <Switch>
              <Route 
                path="/" 
                render={(props) => (
                  <DesktopHomePage {...props}/>
                )}
              />
            </Switch>
          ) : (
            <>
              <Switch>
                <Route 
                  path="/" 
                  exact={true}
                  render={(props) => (
                    <MobileHomePage {...props}/>
                  )}
                />
                <Route path="/city/:id" component={MobileSelectedCityContainer}/>
              </Switch>
              
            </>
          )}
        </Media>
      </div>
    </Router>
  )
};

export default AppRouter;