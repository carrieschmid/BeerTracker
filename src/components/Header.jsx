import React from 'react';
import { Link } from 'react-router-dom';



function Header() {
 var navStyle = {
  padding:'20px',
  marginRight: '600px',
  color:'white',
  fontSize: 24
        
 };

 var buttonStyle = {
   
  marginRight: '20px',
   
          
 };

 return (
  <div  >

    
   <nav className= "navbar navbar-expand-lg navbar-light bg-dark">
    <a class="nav-link active" href="#" style={navStyle}>Keg Tracker</a>
     
    <Link to="/login"><button className="btn btn-outline-success my-2 my-sm-0" style={buttonStyle}>Login</button></Link>

    <Link to="addKeg"><button className="btn btn-outline-success my-2 my-sm-0">Add Keg</button></Link>
   </nav>     
  </div>

 );
}

export default Header;