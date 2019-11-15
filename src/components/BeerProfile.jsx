import React from 'react';
import PropTypes from 'prop-types';



function BeerProfile(props){
 var imgStyle = {
     height: '50px',
     width: '250px'
     
 }

 var cardStyle = {
    height: '400px',
    width: '250px',
    marginRight: '40px'
}
 return (

  <div className="card" style ={cardStyle} >
   <img src={props.costCategory} className="card-img-top" style ={imgStyle} alt="red"/>
   <div className="card-body">
    <h5 className="card-title">{props.name}</h5>
    {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
   </div>
   <ul className="list-group list-group-flush">
    <li className="list-group-item">Brand: {props.brand}</li>
    <li className="list-group-item">% Alcohol: {props.percentAC}</li>
    <li className="list-group-item">Keg Price: {props.kegPrice}</li>
    <li className="list-group-item">Pint Price: {props.pintPrice}</li>
   </ul>
   <div className="card-body">
    <a href="#" className="card-link">Card link</a>
    <a href="#" className="card-link">Another link</a>
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
 pintPrice: PropTypes.number.isRequired
};

export default BeerProfile;