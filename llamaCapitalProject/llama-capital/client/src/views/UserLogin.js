import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserLoginForm from '../components/UserLoginForm';

function UserLogin() {
   const navigate = useNavigate();
   const [ errors, setErrors ] = useState();

   const loginUser = user => {
      axios.get('http://localhost:8000/api/user/login', user, {withCredentials: true})
         .then(res => {
            console.log(res);
            navigate('/user/dashboard')
         })
         .catch(err => {
            const errorResponse = err.response.data.errors;
            const errorArr = [];
            console.log(err);
            for (const entry of Object.entries(errorResponse)) {
               errorArr.push(entry)
            }
            setErrors(errorArr);
         });
   }

   return (
      <div>
         <h1>Log In:</h1>
         <UserLoginForm onSubmitProp={loginUser} errors={errors} />
      </div>
   )
}

export default UserLogin