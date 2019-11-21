//'onKegSubmit' is missing in props validation 

import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from "uuid";

function AddKeg(props){
    let _name = null;
    let _brand = null;
    let _percentAC = 0;
    let _kegPrice = 0;
    let _pintPrice = 0;
    let _pintsRemaining = 124;

function handleNewKegSubmit(event){
    event.preventDefault();
    props.onKegSubmit({
        name: _name.value, brand: _brand.value, percentAC: _percentAC, kegPrice: _kegPrice, pintsRemaining: _pintsRemaining, pintPrice: _pintPrice, id: v4()});
    
    _name.value='';
    _brand.value='';

}

 return (
  <div>
   <form onSubmit={handleNewKegSubmit}>
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
     <input
     type='text'
     id='pintsRemaining'
     placeholder='Pints Remaining:'/>
    <button type='submit'>Submit</button>

   </form>
  </div>
 );
}

AddKeg.propTypes={
    onkegSubmit: Proptypes.func
};

export default AddKeg;