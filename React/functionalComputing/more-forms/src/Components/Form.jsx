import React, {useState} from 'react'

const Form = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false)
    
    const [firstNameError, setFirstNameError] = useState(true)
    const [lastNameError, setLastNameError] = useState(true)
    const [emailError, setEmailError] = useState(true)
    const [passwordError, setPasswordError] = useState(true)
    const [confirmPasswordError, setConfirmPasswordError] = useState(true)

    const handleSubmit =(e)=>{
        e.preventDefault(); // only for onSubmit
        if(!firstNameError && !lastNameError && !emailError && !passwordError && !confirmPasswordError){
            const newUser = {firstName, lastName, email, password, confirmPassword}
            console.log(newUser)
            setHasBeenSubmitted(true)
        }
        else{
            alert("error")
        }
    }

    const handleFirstName = (e) => {
        setFirstName(e.target.value)
        if(e.target.value.length<3 && e.target.value.length>0){
            setFirstNameError("first name must be 3 characters")
        }
        else{
            setFirstNameError("")
        }
    }
    
    const handleLastName = (e) => {
        setLastName(e.target.value)
        if(e.target.value.length<3 && e.target.value.length>0){
            setLastNameError("last name must be 3 characters")
        }
        else{
            setLastNameError("")
        }
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
        if(e.target.value.length<3 && e.target.value.length>0){
            setEmailError("email must be 3 characters")
        }
        else{
            setEmailError("")
        }
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
        if(e.target.value.length<8){
            setPasswordError("password must be 8 characters")
        }
        else{
            setPasswordError("")
        }
    }

    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value)
        if(e.target.value!==password){
            setConfirmPasswordError(" passwords must match")
        }
        else{
            setConfirmPasswordError("")
        }
    }

  return (
    <div>
        {
            hasBeenSubmitted?
            <h1>Thank you for submitting the form!</h1>:
            <h1>Please fill out the form</h1>
        }
        
        <form onSubmit={ handleSubmit }>
            <div>
                <label>First Name: </label> 
                <input type="text" name="firstName" onChange={handleFirstName} value={ firstName } />
                {
                    firstNameError?
                    <p>{firstNameError}</p>:
                    ""
                }
            </div>
            <div>
                <label>Last Name: </label> 
                <input type="text" name="lastName" onChange={handleLastName} value={ lastName } />
                {
                    lastNameError?
                    <p>{lastNameError}</p>:
                    ""
                }            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" name="email" onChange={handleEmail} value={ email } />
                {
                    emailError?
                    <p>{emailError}</p>:
                    ""
                }            </div>
            <div>
                <label>Password: </label>
                <input type="text" name="password" onChange={handlePassword} value={ password } />
                {
                    passwordError?
                    <p>{passwordError}</p>:
                    ""
                }            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="text" name="confirmPassword" onChange={handleConfirmPassword} value={ confirmPassword } />
                    <p>{confirmPasswordError}</p>
            </div>
            <input type="submit" value="Create User" />
        </form>
        <p>{firstName}</p>
        <p>{lastName}</p>
        <p>{email}</p>
        <p>{password}</p>
        <p>{confirmPassword}</p>
    </div>
  )
}

export default Form