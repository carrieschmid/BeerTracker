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
      key={kegId}
      kegId={kegId}
      //Here, key and ticketId props are assigned to the ticketIds being looped through by Object.keys() instead of a id value within the ticket object in masterTicketList.
      currentRouterPath={props.currentRouterPath}
      onKegSelection={props.onKegSelection}/>;
    })}
   </div>
  </div>
 );
}

OurBeer.propTypes = {
 kegList: PropTypes.object,
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