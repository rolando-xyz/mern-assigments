import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import RegistrationForm from '../components/RegistrationForm';

function CreateUser() {
   const navigate = useNavigate();
   const [ errors, setErrors ] = useState();

   const createUser = user => {
      axios.post('http://localhost:8000/api/user/new', user, {withCredentials:true})
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
         <h1>Registration:</h1>
         <RegistrationForm onSubmitProp={createUser} errors={errors} />
      </div>
   )
}

export default CreateUser