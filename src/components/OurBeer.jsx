import React from 'react';
import BeerProfile from './BeerProfile';

function OurBeer(props){
 
       
 return(
  <div >
   <div > 
  
    {Object.keys(props.kegList).map(function(kegId){
     var keg = props.kegList[kegId];
     return <BeerProfile 
    
      name = {keg.name}
      brand={keg.brand}
      percentAC={keg.percentAC}
      kegPrice = {keg.kegPrice}
      pintPrice ={keg.pintPrice}
      pintsRemaining={keg.pintsRemaining}
      key={kegId}
      kegId={kegId}
      currentRouterPath={props.currentRouterPath}
      onKegSelection={props.onKegSelection}
      onSellPint= {props.onSellPint} 
     />;
    })}
   </div>
  </div>
 );
}


    
export default OurBeer;