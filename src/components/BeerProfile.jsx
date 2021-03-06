import React from 'react';
// import React, { useState } from 'react';


function BeerProfile(props){

 

 function handleSellPintClick() {
  props.onSellPint(props.kegId);
 }
 
 const beerInformation =
  <div>
   <div>
    
    {/* <img src={props.selectedKeg.costCategory} className="card-img-top" style ={imgStyle} alt="red"/>
   <div className="card-body"> */}
    
    
    <h5> {props.name}</h5>
   </div>
   <ul>
    <li className="list-group-item">Brand: {props.brand}</li>
    <li className="list-group-item">% Alcohol: {props.percentAC}</li>
    <li className="list-group-item">Keg Price: {props.kegPrice}</li>
    <li className="list-group-item">Pint Price: {props.pintPrice}</li>
    <li className="list-group-item">Pints Remaining: {props.pintsRemaining}</li>
    <button onClick={handleSellPintClick}>Sell Pint</button>
   </ul>
  </div>;


 if (props.currentRouterPath === '/admin'){
  return (
   <div onClick={() => {props.onKegSelection(props.kegId);}}>
    {beerInformation}
   </div>
  );
 } else {
  return (
   <div>
    {beerInformation}
   </div>
  );
 }
}




export default BeerProfile;