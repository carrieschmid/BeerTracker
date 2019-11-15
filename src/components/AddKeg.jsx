import React from 'react';

function AddKeg(){
 return (
  <div>
   <form>
    <input
     type='text'
     id='name'
     placeholder='Name'/>
     <input
     type='text'
     id='brand'
     placeholder='Brand'/>
     <input
     type='text'
     id='percentAC'
     placeholder='% Alcohol:'/>
     <input
     type='text'
     id='kegPrice'
     placeholder='Keg Price:'/>
     <input
     type='text'
     id='pintPrice'
     placeholder='Pint Price:'/>
     <button type='submit'>Submit</button>

   </form>
  </div>
 );
}

export default AddKeg;