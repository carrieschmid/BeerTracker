import React from 'react';
import PropTypes from 'prop-types';



function BeerProfile(props){

function handleSellPintClick(){
    props.sellPint(props.index);
}

 var imgStyle = {
  height: '50px',
  width: '250px'
     
 };

 var cardStyle = {
  height: '450px',
  width: '250px',
  marginRight: '40px',
  marginTop:'15px'
 };
 return (

  <div className="card" style ={cardStyle} >
   <img src={props.costCategory} className="card-img-top" style ={imgStyle} alt="red"/>
   <div className="card-body">
    <h5 className="card-title">{props.name}</h5>
   </div>
   <ul className="list-group list-group-flush">
    <li className="list-group-item">Brand: {props.brand}</li>
    <li className="list-group-item">% Alcohol: {props.percentAC}</li>
    <li className="list-group-item">Keg Price: {props.kegPrice}</li>
    <li className="list-group-item">Pint Price: {props.pintPrice}</li>
    <li className="list-group-item">Pints Remaining: {props.pintsRemaining}</li>
   </ul>
   <div className="card-body">
    <button type="button" class="btn btn-secondary" onclick={handleSellPintClick}>Sell a Pint</button>
   
   </div>
  </div>


 );
}

BeerProfile.propTypes = {
 costCategory:PropTypes.element,
 name: PropTypes.string.isRequired,
 brand: PropTypes.string.isRequired,
 percentAC: PropTypes.number.isRequired,
 kegPrice: PropTypes.number.isRequired,
 pintPrice: PropTypes.number.isRequired,
 pintsRemaining: PropTypes.number.isRequired,
 sellPint: PropTypes.func,
 index: PropTypes.number,

};

export default BeerProfile;