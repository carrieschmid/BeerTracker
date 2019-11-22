import React from 'react';
import Header from './Header';
import OurBeer from './OurBeer';
import Login from './Login';
import AddKeg from './AddKeg';
import { Switch, Route } from 'react-router-dom';
// import React, { Component } from 'react';  




function App() {
    contrustor(props){
        super(props);
        this.state={
            masterKegList:{},
            selectedKeg:null
        }
    
        this.handleAddingNewKeg=this.handleAddingNewKeg.bind(this);
        this.handleSellPint = this.handleSellPint.bind(this)
    }
    
 return (
  <div> 


   <Header/>
   <OurBeer/>
   <Switch>
    <Route path='/login' component={Login} />
    <Route path='/addKeg' component={AddKeg} />
   </Switch>
  </div>
 );
}

export default App;

