import React from 'react';

import UserGreetings from './UserGreetings';
import CitiesContainer from './CitiesContainer';

import {userName} from '../shared/userName';

function MobileHomePage() {
  return(
    <>
      <UserGreetings utente={userName} />
      <CitiesContainer/>
    </>
  )
}

export default MobileHomePage;