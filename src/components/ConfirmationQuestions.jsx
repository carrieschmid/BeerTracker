import React from 'react';

function ConfirmationQuestions(props){

    var formStyle = {
        marginTop: '50px',
        marginLeft: '25px'
       };
 return (
  <div style = {formStyle}>
   <p>Are you sure you want to add a keg?</p>
   <button onClick={props.onConfirmation}>Yes</button>
   {/* this is passed through from NewKegControl. the methos we need is housed in the prop */}
  </div>
 );
}



export default ConfirmationQuestions;