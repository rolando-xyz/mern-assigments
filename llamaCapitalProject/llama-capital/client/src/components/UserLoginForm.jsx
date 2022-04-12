import React, { useReducer } from 'react';
import { UPDATE_FORM, onInputChange, onFocusOut } from '../lib/formUtils';

const initialState = {
   email: { value: '', touched: false, hasError: true, error: '' },
   password: { value: '', touched: false, hasError: true, error: '' },
   isFormValid: false,
};

const formsReducer = (state, action) => {
   switch (action.type) {
      case UPDATE_FORM:
         const { name, value, hasError, error, touched, isFormValid } = action.data;
         return {
            ...state,
            [name]: { ...state[name], value, hasError, error, touched }, isFormValid,
         };
      default:
         return state;
   }
};

function UserLoginForm(props) {
   const { onSubmitProp, errors } = props;
   const [formState, dispatch] = useReducer(formsReducer, initialState);

   const handleOnSubmit = (e) => {
      e.preventDefault();
      onSubmitProp({email: formState.email.value, password: formState.password.value});
   }

   return (
      <div id="test">
         <form onSubmit={(e) => handleOnSubmit(e)}>
            <div>
               <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email..."
                  autoComplete="username"
                  onChange={e => { onInputChange("email", e.target.value, dispatch, formState) }}
                  onBlur={e => { onFocusOut("email", e.target.value, dispatch, formState) }}
                  value={formState.email.value} />
            </div>
            { formState.email.touched && formState.email.hasError && (<div>{ formState.email.error }</div>)}
            { errors && errors.filter(error => error[0] === 'email').map((err, idx) => (<div key={idx}>{err[1].message}</div> ))}
            <div>
               <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password..."
                  autoComplete="new-password"
                  onChange={e => { onInputChange("password", e.target.value, dispatch, formState) }}
                  onBlur={e => { onFocusOut("password", e.target.value, dispatch, formState) }}
                  value={formState.password.value} />
            </div>
            { formState.password.touched && formState.password.hasError && (<div>{ formState.password.error }</div>)}
            { errors && errors.filter(error => error[0] === 'password').map((err, idx) => (<div key={idx}>{err[1].message}</div> ))}
            <div><input type="submit" value="Submit" /></div>
         </form>
      </div>
   )
}

export default UserLoginForm