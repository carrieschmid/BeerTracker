import React from 'react';
// import OurTeamProfile from './OurTeamProfile';


var profiles = [

 {
  costCategory: mid,   
  name: 'Widmere IPA',
  brand: 'Widmere',
  percentAC: 4,
  kegPrice: 20,
  pintPrice: 4
 },
 
 {
    costCategory: low,   
    name: 'Miller High Life',
    brand: 'Miller',
    percentAC: 3,
    kegPrice: 15,
    pintPrice: 3
   },

 {
  costCategory: low,   
  name: 'Pabst Blue Ribbon',
  brand: 'Pabst',
  percentAC: 3,
  kegPrice: 15,
  pintPrice: 3
 },

];

function OurBeer(){
 return(

  <div>
   <h5>Beers in Stock</h5>
   {profiles.map((profile, index)=>
    <BeerProfile 
     costCategory= {profile.costCategory}
     name = {profile.name}
     brand={profile.brand}
     percentAC={profile.percentAC}
     kegPrice={profile.kegPrice}
     pintPrice={profile.pintPrice}
     key={index} /> 
   )}
  </div>
 );

}

export default OurBeer;