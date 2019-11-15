import React from 'react';

function Login(){
 return (
  <div>
   <form>
    <input
     type='text'
     id='userName'
     placeholder='User Name:'/>
    <input
     type='text'
     id='password'
     placeholder='Passwords'/>
    <button type='submit'>Login</button>
   </form>
  </div>
 );
}

export default Login;