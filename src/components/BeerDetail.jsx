import React from 'react';

function BeerDetail(props){

 return (
  <div className="container">
   <hr/>
   <h1>{props.selectedKeg.name} - {props.selectedKeg.brand}</h1>
   <ul>
    <li>% Alcohol: {props.selectedKeg.percentAC}</li>
    <li>Keg Price: {props.selectedKeg.kegPrice}</li>
    <li>Pint Price: {props.selectedKeg.pintPrice}</li>
    <li>Pints Remaining: {props.selectedKeg.pintsRemaining}</li>
   </ul>
      
   <hr/>
  </div>
 );
}


  
export default BeerDetail;