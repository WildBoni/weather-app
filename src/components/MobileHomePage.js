import React from 'react';

import UserGreetings from './UserGreetings';
import CitiesContainer from './CitiesContainer';
import MobileMenuBar from './MobileMenuBar';

import {userName} from '../shared/userName';

function MobileHomePage() {
  return(
    <>
      <UserGreetings utente={userName} />
      <CitiesContainer/>
      <MobileMenuBar/>
    </>
  )
}

export default MobileHomePage;