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
   pintsRemaining:124
  };
    
  this.handleAddingNewKeg=this.handleAddingNewKeg.bind(this);
  //   this.handleSellPint = this.handleSellPint.bind(this);
  this.handleChangingSelectedKeg = this.handleChangingSelectedKeg.bind(this);
 }
    
  

 handleAddingNewKeg(newKeg){
     //let's just wait to assign IDs until handleAddingNewTicketToList() in App.jsx fires. This ensures they won't be included in the newTicket argument, and therefore won't appear inside the ticket object in masterTicketList.
  var newKegId = v4();
  var newMasterKegList = Object.assign({}, this.state.masterKegList,
   {[newKegId]: newKeg});
   //is this necessary?
//   newMasterKegList[newKeg.id];
  this.setState({masterKegList:newMasterKegList});
  //not sure if these are coming back how they are supposed to
  console.log(this.state.newMasterKegList);
  console.log(this.state);
 }

//  handleSellPint(kegId){
//     var updatedKeg = Object.assign({}, this.state.masterKegList,
//         {[newKegId]: newKeg});
//     var newPintsRemaing = pintsRemaining - 1;
//     this.setState({masterKegList:newMasterKegList});
// }
   
 handleChangingSelectedKeg(kegId){
  this.setState({selectedKeg: kegId});
  //this comes back as null?
  console.log(this.state);
 }

    
 render(){
    console.log(this.state.masterKegList);
  return (
   <div> 
    <Header/>
   
    <Switch>
     <Route exact path='/' render={()=><OurBeer kegList={this.state.masterKegList} 
     onSellPint={this.handleSellPint} />
     <Route path='/newKeg' render={()=><NewKegControl onAddNewKeg={this.handleAddingNewKeg} />} />
     //why props passed in here?
     <Route path='/admin' render={(props) => <Admin kegList={this.state.masterKegList} currentRouterPath={props.location.pathname}onKegSelection={this.handleChangingSelectedKeg}
      selectedKeg={this.state.selectedKeg} s
     />} />
     
     <Route component={Error404} />
    </Switch>
   </div>
  );
 }
}




export default App;

