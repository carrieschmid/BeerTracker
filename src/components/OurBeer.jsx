import React from 'react';
import BeerProfile from './BeerProfile';
import PropTypes from 'prop-types';

function OurBeer(props){
       
 return(
  <div className="container">
   <div className="row"> 
  
    {Object.keys(props.kegList).map(function(kegId){
     var keg = props.kegList[kegId];
     return <BeerProfile 
      key={kegId}
      name = {keg.name}
      brand={keg.brand}
      key={kegId}
      kegId={keg.id}
      currentRouterPath={props.currentRouterPath}
      onKegSelection={props.onKegSelection}/>;
    })}
   </div>
  </div>
 );
}

OurBeer.propTypes = {
  keglist: PropTypes.object,
  currentRouterPath: PropTypes.string,
  onKegSelection: PropTypes.func
 
};
    
    
    
{/* <BeerProfile 
      costCategory= {profile.costCategory}
      name = {profile.name}
      brand={profile.brand}
      percentAC={profile.percentAC}
      kegPrice={profile.kegPrice}
      pintPrice={profile.pintPrice}
      pintsRemaining ={profile.pintsRemaining}
      key={kegId}
      kegId={keg.id}
      sellPint={profile.sellPint} /> 
 */}



export default OurBeer;