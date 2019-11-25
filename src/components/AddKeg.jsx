//'onKegSubmit' is missing in props validation 

import React from 'react';
// import PropTypes from 'prop-types';
// import { v4 } from 'uuid';

function AddKeg(props){
 let _name = null;
 let _brand = null;
 let _percentAC = 0;
 let _kegPrice = 0;
 let _pintPrice = 0;
 let _pintsRemaining = 124;

 function handleNewKegSubmit(event){
  event.preventDefault();
  props.onAddNewKeg({
   name: _name.value, brand: _brand.value, percentAC: _percentAC.value, kegPrice: _kegPrice.value, pintsRemaining: _pintsRemaining.value, pintPrice: _pintPrice.value, 
//    id: v4()
    });
    
  _name.value='';
  _brand.value='';
  _percentAC= 0;
  _kegPrice=0;
  _pintRemaining=124;
  _pintPrice=0;

 }

 return (
  <div>
   <form onSubmit={handleNewKegSubmit}>
    <input
     type='text'
     id='name'
     placeholder='Name'
     ref={(input)=>{_name =input;}}/>
    <input
     type='text'
     id='brand'
     placeholder='Brand'
     ref={(input)=>{_brand =input;}}/>
    <input
     type='text'
     id='percentAC'
     placeholder='% Alcohol:'
     ref={(input)=>{_percentAC =input;}}/>
    <input
     type='text'
     id='kegPrice'
     placeholder='Keg Price:'
     ref={(input)=>{_kegPrice =input;}}/>
    <input
     type='text'
     id='pintPrice'
     placeholder='Pint Price:'
     ref={(input)=>{_pintPrice =input;}}/>
    <input
     type='text'
     id='pintsRemaining'
     placeholder='Pints Remaining:'
     ref={(input)=>{_pintsRemaining =input;}}/>
    <button type='submit'>Submit</button>

   </form>
  </div>
 );
}

AddKeg.propTypes={
    onAddNewKeg: Proptypes.func
  
};

export default AddKeg;