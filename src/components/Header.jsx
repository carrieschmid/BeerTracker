import React from 'react';
import { Link } from 'react-router-dom';


function Header() {
 var navStyle = {
  padding:'20px',
  marginRight: '800px',
  color:'white',
  fontSize: 24
        
 };
 return (
  <div  >
   <nav className= "navbar navbar-expand-lg navbar-light bg-dark">
    <a class="nav-link active" href="#" style={navStyle}>Keg Tracker</a>
  
    <Link to="/login"><button className="btn btn-outline-success my-2 my-sm-0" type="submit">Login</button></Link>
    
    
   </nav>     
  </div>

 );
}

export default Header;