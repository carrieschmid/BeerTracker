import React from 'react';
import OurBeer from './OurBeer';
import BeerDetail from './BeerDetail';
import PropTypes from 'prop-types';



function Admin(props) {
  let optionalSelectedKegContent = null;
  if (props.selectedKeg != null){
    optionalSelectedKegContent =  <BeerDetail selectedKeg={props.kegList[props.selectedKeg]}/>;
  
  }
 return (
  <div>
   <h2>Admin</h2>
   {optionalSelectedKegContent}
   <OurBeer
    kegList={props.kegList}
        
    currentRouterPath={props.currentRouterPath} 
    onKegSelection={props.onKegSelection}
   />
  </div>
 );
}

Admin.propTypes = {
 kegList: PropTypes.array,
 currentRouterPath: PropTypes.string.isRequired,
 onKegSelection: PropTypes.func.isRequired,
 selectedKeg: PropTypes.string
};

export default Admin;