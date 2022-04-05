import React from 'react';
import { Link } from 'react-router-dom';

function Main() {
   return (
      <div>
         <Link to={'/user/new'}>Add a User</Link><br />
         <Link to={'/user/login'}>Login</Link>
      </div>
   )
}

export default Main