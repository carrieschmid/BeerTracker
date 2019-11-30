//'onKegSubmit' is missing in props validation 

import React from 'react';
import PropTypes from 'prop-types';
// import { v4 } from 'uuid';

function AddKeg(props){
 let _name = null;
 let _brand = null;
 let _percentAC = null;
 let _kegPrice = null;
 let _pintPrice = null;
 let _pintsRemaining = null;

 function handleNewKegSubmit(event){
  event.preventDefault();
  props.onAddNewKeg({
   name: _name.value, brand: _brand.value, percentAC: _percentAC.value, kegPrice: _kegPrice.value, pintsRemaining: _pintsRemaining.value, pintPrice: _pintPrice.value, 
   //    id: v4()
  });
    
  _name.value='';
  _brand.value='';
  _percentAC= '';
  _kegPrice='';
  _pintsRemaining='124';
  _pintPrice='';

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
     placeholder='124'
     ref={(input)=>{_pintsRemaining =input;}}/>
    <button type='submit'>Submit</button>

   </form>
  </div>
 );
}

AddKeg.propTypes={
 onAddNewKeg: PropTypes.func
  
};

export default AddKeg;