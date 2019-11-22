import React from 'react';
import Beer from './Beer';
import PropTypes from 'prop-types';

function OurBeer(props){
       
 return(
  <div className="container">
   <div className="row"> 
  
    {Object.keys(props.kegList).map(function(kegId){
      var keg = props.kegList[kegId];
      return
      <Beer 
      key={kegId}
      name = {keg.name}
      brand={keg.brand}
      kegId={keg.id}
      currentRouterPath={props.currentRouterPath}
      onKegSelection={props.onKegSelection}/>;
    })}
    </div>
    </div>
    );
    }

    OurBeer.propTypes = {
      name: PropTypes.name.isRequired,
      brand: PropTypes.brand.isRequired,
      currentRouterPath: PropTypes.string,
      onKegSelection: PropTypes.func,
      kegId: PropTypes.string.isRequired
    }
    
    
    
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