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
   //    pintsRemaining:124
  };
    
  this.handleAddingNewKeg=this.handleAddingNewKeg.bind(this);
  //   this.handleSellPint = this.handleSellPint.bind(this);
  this.handleChangingSelectedKeg = this.handleChangingSelectedKeg.bind(this);
  this.handleSellPint = this.handleSellPint.bind(this);
 }
    
  

 handleAddingNewKeg(newKeg){
  var newKegId = v4();
  var newMasterKegList = Object.assign({}, this.state.masterKegList,
   {[newKegId]: newKeg});
  this.setState({masterKegList:newMasterKegList});
  console.log(this.state.newMasterKegList);
  console.log(this.state);
 }

 handleSellPint(kegId){
  var copyList = this.state.masterKegList;
  copyList.likes = copyList.pintsRemaining - 1; 
  this.setState({masterKegList: copyList});
 }
   
 handleChangingSelectedKeg(kegId){
  this.setState({selectedKeg: kegId});
  console.log(this.state);
 }

    
 render(){
  console.log(this.state.masterKegList);
  return (
   <div> 
    <Header/>
   
    <Switch>
     <Route exact path='/' render={()=><OurBeer kegList={this.state.masterKegList} 
      //  onSellPint={this.handleSellPint} 
     /> } />
     <Route path='/newKeg' render={()=><NewKegControl onAddNewKeg={this.handleAddingNewKeg} />} 
      onSellPint={this.handleSellPints}/>
     <Route path='/admin' render={(props) => <Admin kegList={this.state.masterKegList} currentRouterPath={props.location.pathname}onKegSelection={this.handleChangingSelectedKeg}
      selectedKeg={this.state.selectedKeg} 
     />} />
     
     <Route component={Error404} />
    </Switch>
   </div>
  );
 }
}




export default App;

