import React from 'react';
import Header from './Header';
import OurBeer from './OurBeer';
import Admin from './Admin';
import NewKegControl from './NewKegControl';
import { Switch, Route } from 'react-router-dom';
import { v4 } from 'uuid';
import Error404 from './Error404';

class App extends React.Component {
 constructor(props){
  super(props);
  this.state={
   masterKegList:{},
   selectedKeg:null,
  };
    
  this.handleAddingNewKeg=this.handleAddingNewKeg.bind(this);
  this.handleChangingSelectedKeg = this.handleChangingSelectedKeg.bind(this);
  this.handleSellPint = this.handleSellPint.bind(this);
 }
    
  

 handleAddingNewKeg(newKeg){
  var newKegId = v4();
  var newMasterKegList = Object.assign({}, this.state.masterKegList,
   {[newKegId]: newKeg});
  this.setState({masterKegList:newMasterKegList});
 }

 handleSellPint(kegId){
  var copyList = Object.assign({},this.state.masterKegList);
  copyList[kegId].pintsRemaining -= 1; 
  this.setState({masterKegList: copyList});
 }
   
 handleChangingSelectedKeg(kegId){
  this.setState({selectedKeg: kegId});
 }

    
 render(){
  return (
   <div> 
    <Header/>
   
    <Switch>
     <Route exact path='/' render={()=><OurBeer kegList={this.state.masterKegList} 
      onSellPint={this.handleSellPint} 
     /> } />
     <Route path='/newKeg' render={()=><NewKegControl onAddNewKeg={this.handleAddingNewKeg} />} 
     />
     <Route path='/admin' render={(props) => <Admin kegList={this.state.masterKegList} currentRouterPath={props.location.pathname}onKegSelection={this.handleChangingSelectedKeg}
      selectedKeg={this.state.selectedKeg} 
      onSellPint={this.handleSellPint}
     />} />
     
     <Route component={Error404} />
    </Switch>
   </div>
  );
 }
}




export default App;

