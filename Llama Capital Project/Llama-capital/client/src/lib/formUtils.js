export const UPDATE_FORM = "UPDATE_FORM"

// Triggered every time the value of the form changes
export const onInputChange = (name, value, dispatch, formState) => {
   const { hasError, error } = validateInput(name, value);

   let isFormValid = true;

   for (const key in formState) {
      const item = formState[key];
      if (key === name && hasError) {
         isFormValid = false;
         break
      } else if (key !== name && item.hasError) {
         isFormValid = false;
         break
      }
   }

   dispatch({
      type: UPDATE_FORM,
      data: { name, value, hasError, error, touched: false, isFormValid },
   });
}

let password = "";

export const validateInput = (name, value) => {
   if (name === 'password'){
      password = value;
   }

   let hasError = false,
      error = "";

   switch (name) {
      case "firstName":
         if (value.trim() === "") {
            hasError = true;
            error = "First name cannot be empty";
         } else if (!/^[a-zA-Z ]+$/.test(value)) {
            hasError = true;
            error = "Invalid Name. Avoid Special characters";
         } else if (value.length < 3) {
            hasError = true;
            error = "Must be more than 3 characters long."
         } else {
            hasError = false;
            error = "";
         }
         break
      case "lastName":
         if (value.trim() === "") {
            hasError = true;
            error = "First name cannot be empty";
         } else if (!/^[a-zA-Z ]+$/.test(value)) {
            hasError = true;
            error = "Invalid Name. Avoid Special characters";
         } else if (value.length < 3) {
            hasError = true;
            error = "Must be more than 3 characters long."
         } else {
            hasError = false;
            error = "";
         }
         break
      case "email":
         if (value.trim() === "") {
            hasError = true;
            error = "Email cannot be empty";
         } else if (!/^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(value)) {
            hasError = true;
            error = "Invalid Email.";
         } else {
            hasError = false;
            error = "";
         }
         break
      case "password":
         if (value.trim() === "") {
            hasError = true;
            error = "Password cannot be empty";
         } else if (value.length < 8) {
            hasError = true;
            error = "Password must be at least 8 characters long."
         } else if (value.length > 24) {
            hasError = true;
            error = "Password must be less than 24 characters long."
         } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,24})?/.test(value)) {
            hasError = true;
            error = "Invalid Password. Include 1 upper, 1 lower, 1 number, and 1 special.";
         } else {
            hasError = false;
            error = "";
         }
         break
      case "confirmPassword":
         if (value.trim() === "") {
            hasError = true;
            error = "Confirm password cannot be empty.";
         } else if (value !== password) {
            hasError = true;
            error = "Must match your password entry."
         } else {
            hasError = false;
            error = "";
         }
         break
      default:
         break
   }
   return { hasError, error };
}

export const onFocusOut = (name, value, dispatch, formState) => {
   const { hasError, error } = validateInput(name, value);

   let isFormValid = true;

   for (const key in formState) {
      const item = formState[key];
      if (key === name && hasError) {
         isFormValid = false;
         break
      } else if (key !== name && item.hasError) {
         isFormValid = false;
         break
      }
   }

   dispatch({
      type: UPDATE_FORM,
      data: { name, value, hasError, error, touched: true, isFormValid },
   });
}