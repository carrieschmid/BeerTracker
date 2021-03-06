import React from 'react';
import PropTypes from 'prop-types';


function AddKeg(props){
 let _name = null;
 let _brand = null;
 let _percentAC = null;
 let _kegPrice = null;
 let _pintPrice = null;
//  let _pintsRemaining = null;

 function handleNewKegSubmit(event){
  event.preventDefault();
  props.onAddNewKeg({
   name: _name.value, brand: _brand.value, percentAC: _percentAC.value, kegPrice: _kegPrice.value, pintPrice: _pintPrice.value, 
   pintsRemaining: 124
  
  });
    
  _name.value='';
  _brand.value='';
  _percentAC.value= '';
  _kegPrice.value='';
  _pintPrice.value='';
//   _pintsRemaining.value='';
  
 }

 var formStyle = {
    marginTop: '50px',
    marginLeft: '25px'
   };

 return (
  
  <div style={formStyle}>
    <p>______________________________</p>
    <h3>Enter a new keg:</h3>
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
    {/* <input
     type='text'
     id='pintsRemaining'
     placeholder='124'
     ref={(input)=>{_pintsRemaining =input;}}/> */}
    <p>______________________________</p>
    <button type='submit'>  Submit</button>
   
   </form>
  </div>
 );
}

AddKeg.propTypes={
 onAddNewKeg: PropTypes.func
  
};

export default AddKeg;