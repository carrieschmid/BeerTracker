import React from 'react';
import PropTypes from 'prop-types';

function Beer(props){
 const kegInformation =
  <div>
   <h3>{props.name} - {props.brand}</h3>
   <hr/>
  </div>;
 if (props.currentRouterPath === '/admin'){
  return (
   <div onClick={() => {props.onKegSelection(props.kegId);}}>
    {kegInformation}
   </div>
  );
 } else {
  return (
   <div>
    {kegInformation}
   </div>
  );
 }
}

Beer.propTypes = {
 name: PropTypes.name,
 brand: PropTypes.brand,
 currentRouterPath: PropTypes.string,
 onKegSelection: PropTypes.func,
 kegId: PropTypes.string.isRequired
};

export default Beer;