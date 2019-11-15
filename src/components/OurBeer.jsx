import React from 'react';
import BeerProfile from './BeerProfile';
import Red from '../assets/images/red-box-background.jpg';


var profiles = [

 {
  costCategory: Red,   
  name: 'Widmere IPA',
  brand: 'Widmere',
  percentAC: 4,
  kegPrice: 20,
  pintPrice: 4
 },
 
 {
  costCategory: Red,   
  name: 'Miller High Life',
  brand: 'Miller',
  percentAC: 3,
  kegPrice: 15,
  pintPrice: 3
 },

 {
  costCategory: Red,   
  name: 'Pabst Blue Ribbon',
  brand: 'Pabst',
  percentAC: 3,
  kegPrice: 15,
  pintPrice: 3
 },

];

function OurBeer(){
       
    return(
   <div className="container">
   <h5>Beers in Stock</h5>
   <div className="row"> 
  
   {profiles.map((profile, index)=>
    <BeerProfile 
     costCategory= {profile.costCategory}
     name = {profile.name}
     brand={profile.brand}
     percentAC={profile.percentAC}
     kegPrice={profile.kegPrice}
     pintPrice={profile.pintPrice}
     pintsLeft ={profile.pintsLeft}
     key={index} /> 
   )}
   
   </div>
  </div>
 );

}

export default OurBeer;