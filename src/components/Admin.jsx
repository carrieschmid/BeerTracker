import React from 'react';
import PropTypes from 'prop-types';
import OurBeer from './OurBeer';
import BeerProfile from './BeerProfile';
import BeerDetail from './BeerDetail';

function Admin(props) {
  let optionalSelectedKegContent = null;
  if (props.selectedKeg != null){
    optionalSelectedKegContent =  <BeerDetail selecteKeg={props.kegList[props.selectedKeg]}/>;
  
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