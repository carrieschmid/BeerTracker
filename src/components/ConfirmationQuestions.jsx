import React from 'react';

function ConfirmationQuestions(props){
 return (
  <div>
   <p>Are you sure you want to add a keg?</p>
   <button onClick={props.onConfirmation}>Yes</button>
   {/* this is passed through from NewKegControl. the methos we need is housed in the prop */}
  </div>
 );
}



export default ConfirmationQuestions;