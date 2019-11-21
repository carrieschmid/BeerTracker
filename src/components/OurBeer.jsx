// 'beerList' is missing in props validation      react/prop-types
// 'beerList.map' is missing in props validation

import React from 'react';
import BeerProfile from './BeerProfile';
import PropTypes from 'prop-types';

function OurBeer(props){
       
 return(
  <div className="container">
   <div className="row"> 
  
    {props.beerList.map((profile, index)=>
     <BeerProfile 
      costCategory= {profile.costCategory}
      name = {profile.name}
      brand={profile.brand}
      percentAC={profile.percentAC}
      kegPrice={profile.kegPrice}
      pintPrice={profile.pintPrice}
      pintsRemaining ={profile.pintsRemaining}
      key={index}
      id={profile.id}
      index={index}
      // updateFeed={props.updateFeed}
      sellPint={profile.sellPint} /> 
    )}

   
   </div>
  </div>
 );

}

OurBeer.proptypes = {
  beerList: PropTypes.array,
  sellPint: PropTypes.func,
};

export default OurBeer;