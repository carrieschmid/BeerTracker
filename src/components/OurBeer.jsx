import React from 'react';
import BeerProfile from './BeerProfile';
import PropTypes from 'prop-types';

function OurBeer(props){
       
 return(
  <div >
   <div > 
  
    {Object.keys(props.kegList).map(function(kegId){
     var keg = props.kegList[kegId];
     //Now, because the ID is no longer included inside the ticket object we'll need to refactor how we pass pass the ID from TicketList to Ticket:
     //what are []? and what's realtionship between kegId and newKegId?
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

OurBeer.propTypes = {
 kegList: PropTypes.object,
 currentRouterPath: PropTypes.string,
 onKegSelection: PropTypes.func,
 onSellPint: PropTypes.func
 
};
    
export default OurBeer;