import React from 'react';
import Header from './Header';
import OurBeer from './OurBeer';
import Login from './Login';
import { Switch, Route } from 'react-router-dom';

function App() {
 return (
  <div> 
   <Header/>
   <OurBeer/>
   <Switch>
    <Route path='/login' component={Login} />
   </Switch>
  </div>
 );
}

export default App;