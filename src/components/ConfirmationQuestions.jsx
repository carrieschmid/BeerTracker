import React from 'react';
import PropTypes from 'prop-types';

function ConfirmationQuestions(props){
  return (
    <div>
      <p>Are you sure you want to add a keg?</p>
      <button onClick={props.onTroubleshootingConfirmation}>Yes</button>
    </div>
  );
}

ConfirmationQuestions.propTypes = {
  onTroubleshootingConfirmation: PropTypes.func
};

export default ConfirmationQuestions;