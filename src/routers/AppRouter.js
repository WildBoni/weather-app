// router uses a media query for splitting mobile / desktop navigation
import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import {createBrowserHistory} from 'history';
import Media from 'react-media';

import MobileHomePage from '../components/MobileHomePage';
import MobileSelectedCityContainer from '../components/MobileSelectedCityContainer';
import DesktopHomePage from '../components/DesktopHomePage';

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