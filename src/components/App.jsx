import React from 'react';
import Header from './Header';
import OurBeer from './OurBeer';
import Login from './Login';
import AddKeg from './AddKeg';
import { Switch, Route } from 'react-router-dom';
// import React, { Component } from 'react';  




class App extends React.Component {
    contrustor(props){
        super(props);
        this.state={
            masterKegList:{},
            selectedKeg:null
        };
    
        this.handleAddingNewKeg=this.handleAddingNewKeg.bind(this);
        this.handleSellPint = this.handleSellPint.bind(this)
    }
    

    handleAddingNewKeg(newKeg){
        var newMasterKegList = Object.assign({}, this.state.masterKegList,
            {[negKeg.id]: newKeg});
            newMasterKegList[newKeg.id]
            this.setState({masterKegList:newMasterKegList});
    }

    handleChangingSelectedKeg(kegId){
        this.setState({masterKegList: newMasterKegList})
    }

    
render(){
 return (
  <div> 
  <Header/>
   <Switch>
          <Route exact path='/' render={()=><OurBeer kegList={this.state.masterKegList} />} />
          <Route path='/admin' render={(props) => <Admin kegList={this.state.masterKegList} currentRouterPath={props.location.pathname}onKegSelection={this.handleChangingSelectedKeg}
            selectedKeg={this.state.selectedKeg} />} />
          <Route path='/addkeg' render={()=><KegControl onAddNewKeg={this.handleAddingNewKeg} />}/>
          {/* <Route component={Error404} /> */}
    </Switch>
    </div>
 );
}
}


}

export default App;

