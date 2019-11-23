import React from 'react';
import PropTypes from 'prop-types';
import OurBeer from './OurBeer';
import AddKeg from './AddKeg';



function Admin(props) {
//   let optionalSelectedKegContent = null;
//   if (props.selectedKeg != null){
//     optionalSelectedKegContent =  <BeerDetail selectedKeg={props.kegList[props.selectedKeg]}/>;
  
//   }
 return (
  <div>
   <h2>Admin</h2>
   {/* {optionalSelectedKegContent} */}
   <AddKeg/>
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