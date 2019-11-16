import React from 'react';
import Header from './Header';
import OurBeer from './OurBeer';
import Login from './Login';
import AddKeg from './AddKeg';
import { Switch, Route } from 'react-router-dom';
// import React, { Component } from 'react';  
// import Popup from './components/Popup';



function App() {
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

// class App extends Component {  

//     constructor(props){  
//   super(props);  
//   this.state = { showPopup: false };  
//   }  
  
//     togglePopup() {  
//   this.setState({  
//        showPopup: !this.state.showPopup  
//   });  
//    }  
  
//     render() {  
//   return (  
//   <div>  
//   <h1> Simple Popup Example In React Application </h1>  
//   <button onClick={this.togglePopup.bind(this)}> Click To Launch Popup</button>  
  
//   {this.state.showPopup ?  
//   <Popup  
//             text='Click "Close Button" to hide popup'  
//             closePopup={this.togglePopup.bind(this)}  
//   />  
//   : null  
//   }  
//   </div>  
  
//   );  
//   }  
//   }  

