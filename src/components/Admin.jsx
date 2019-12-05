import React from 'react';
import OurBeer from './OurBeer';
import BeerDetail from './BeerDetail';




function Admin(props) {
    
 let optionalSelectedKegContent = null;
 if (props.selectedKeg != null){
  optionalSelectedKegContent =  <BeerDetail selectedKeg={props.kegList[props.selectedKeg]}
   onSellPint={props.onSellPint}/>;
    
 }


 return (
  <div>
   <h2>Admin</h2>
   {optionalSelectedKegContent}
   <OurBeer
    kegList={props.kegList}
    currentRouterPath={props.currentRouterPath} 
    onKegSelection={props.onKegSelection}
    onSellPint={props.onSellPint}
   />
  </div>


 );
}



export default Admin;