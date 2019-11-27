import React from 'react';
import PropTypes from 'prop-types';

function BeerDetail(props){
 return (
  <div>
   <hr/>
   <h1>{props.selectedTicket.name} - {props.selectedTicket.brand}</h1>
   <ul>
    <li>% Alcohol: {props.selectedTicket.percentAC}</li>
    <li>Keg Price: {props.selectedTicket.kegPrice}</li>
    <li>Pint Price: {props.selectedTicket.pintPrice}</li>
    <li>Pints Remaining: {props.selectedTicket.pintsRemaining}</li>
   </ul>
      
   <hr/>
  </div>
 );
}

BeerDetail.propTypes = {
 selectedTicket: PropTypes.object
};
  
export default BeerDetail;