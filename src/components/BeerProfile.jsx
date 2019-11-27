import React from 'react';
import PropTypes from 'prop-types';



function BeerProfile(props){

//  function handleSellPintClick(){
//   props.sellPint(props.index);
//  }

 let imgStyle = {
  height: '50px',
  width: '250px'
     
 };

 let cardStyle = {
  height: '450px',
  width: '250px',
  marginRight: '40px',
  marginTop:'15px'
 };

 






 const beerInformation =
 <div>
  <div className="card" style ={cardStyle} >
   {/* <img src={props.selectedKeg.costCategory} className="card-img-top" style ={imgStyle} alt="red"/>
   <div className="card-body"> */}
    <h5 className="card-title">{props.selectedKegname}</h5>
   </div>
   <ul className="list-group list-group-flush">
    {/* <li className="list-group-item">Brand: {props.selectedKeg.brand}</li> */}
    <li className="list-group-item">% Alcohol: {props.selectedKeg.percentAC}</li>
    <li className="list-group-item">Keg Price: {props.selectedKeg.kegPrice}</li>
    <li className="list-group-item">Pint Price: {props.selectedKeg.pintPrice}</li>
    <li className="list-group-item">Pints Remaining: {props.selectedKeg.pintsRemaining}</li>
   </ul>
   <div className="card-body">
    {/* <button type="button" class="btn btn-secondary" onclick={handleSellPintClick}>Sell a Pint</button> */}
   
   </div>
</div>;


 if (props.currentRouterPath === '/admin'){
  return (
   <div onClick={() => {props.onKegSelection(props.ticketId);}}>
    {beerInformation}
   </div>
  );
 } else {
  return (
   <div>
    {beerInformation}
   </div>
  );
 }
}


BeerProfile.propTypes = {
 selectedKeg: PropTypes.object,
//  costCategory:PropTypes.element,
 name: PropTypes.string,
 brand: PropTypes.string,
 percentAC: PropTypes.string,
 kegPrice: PropTypes.string,
 pintPrice: PropTypes.string,
 pintsRemaining: PropTypes.string,
 sellPint: PropTypes.func,
 index: PropTypes.number,
 currentRouterPath: PropTypes.string,
 onKegSelection: PropTypes.func,
 kegId: PropTypes.string.isRequired

};

export default BeerProfile;