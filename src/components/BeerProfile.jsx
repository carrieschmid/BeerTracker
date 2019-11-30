import React from 'react';
// import React, { useState } from 'react';
import PropTypes from 'prop-types';



function BeerProfile(props){
    
    
// Object(...) is not a function at new BeerProfile (BeerProfile.jsx:7)
//  const [pintsCounter, setPintsCounter] = useState(0);


//  function handleSellPintClick(){
 //   props.sellPint(props.index);
 //  }

 //  let imgStyle = {
 //   height: '50px',
 //   width: '250px'
     
 //  };

 //  let cardStyle = {
 //   height: '450px',
 //   width: '250px',
 //   marginRight: '40px',
 //   marginTop:'15px'
 //  };

 
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
    <li className="list-group-item">Pints Remaining: {124}</li>
    {/* <div>
     <button onClick={() => setPintsCounter(pintsCounter - 1)}>Sell Pint</button>
    </div> */}
   </ul>
   <div>
    {/* <button type="button" class="btn btn-secondary" onclick={handleSellPintClick}>Sell a Pint</button> */}
   
   </div>;
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


BeerProfile.propTypes = {
 selectedKeg: PropTypes.object,
 //  costCategory:PropTypes.element,
 name: PropTypes.string,
 brand: PropTypes.string,
 percentAC: PropTypes.string,
 kegPrice: PropTypes.string,
 pintPrice: PropTypes.string,
 pintsRemaining: PropTypes.string,
 sellPint: PropTypes.func,
 index: PropTypes.number,
 currentRouterPath: PropTypes.string,
 onKegSelection: PropTypes.func,
 kegId: PropTypes.string.isRequired

};

export default BeerProfile;