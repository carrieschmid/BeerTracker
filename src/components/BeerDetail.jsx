import React from 'react';
import PropTypes from 'prop-types';

function BeerDetail(props){
 return (
  <div>
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

BeerDetail.propTypes = {
 selectedKeg: PropTypes.object
};
  
export default BeerDetail;