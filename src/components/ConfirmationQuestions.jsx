import React from 'react';
import PropTypes from 'prop-types';

function ConfirmationQuestions(props){
 return (
  <div>
   <p>Are you sure you want to add a keg?</p>
   <button onClick={props.onConfirmation}>Yes</button>
   {/* this is passed through from NewKegControl. the methos we need is housed in the prop */}
  </div>
 );
}

ConfirmationQuestions.propTypes = {
 onConfirmation: PropTypes.func
 //this is passed through from NewKegControl 

};

export default ConfirmationQuestions;