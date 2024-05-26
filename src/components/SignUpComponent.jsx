import React, { useState, useContext } from "react";
import { Navigate, Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { createUser } from "../firebase/authFunctions";

const SignUpComponent = () => {
    const { userLoggedIn } = useContext(AuthContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isRegistering, setIsRegistering] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const onSubmit = async (e) => {
        e.preventDefault();
        if (!isRegistering) {
            setIsRegistering(true);
            await createUser(email, password);
        }
    };

    return (
        <>
          {userLoggedIn && <Navigate to={"/"} replace={true} />}

<div>
    <h3 className="m-3 font-bold">
        Create a new account
    </h3>
</div>

<form onSubmit={onSubmit}>
    <div>
        <label className="m-3  font-bold"> E-mail </label>
        <input 
        type="email"
        autoComplete="email"
        required
        value={email}
        onChange={(e) => {
            setEmail(e.target.value);
        }}
        className="my-2 pl-1 pt-1.5 pb-6 text-gray-900" />
    </div>
    
    <div>
        <label className="m-3  font-bold">
            Password
        </label>
        <input 
        type="password" 
        autoComplete="new-password"
        required
        value={password}
        onChange={(e) => {
            setPassword(e.target.value);
        }}
        className="my-2 pl-1 pt-1.5 pb-6 text-gray-900"
        />
    </div>

    <div>
        <label className="m-3  font-bold">
            Confirm password 
        </label>
        <input 
        disabled={isRegistering}
        type="password" 
        autoComplete="off"
        required
        value={confirmPassword}
        onChange={(e) =>{
            setConfirmPassword(e.target.value);
        }}
        className="my-2 p-1 text-gray-900" 
        />
    </div>

    {errorMessage && (
        <span className=""> {errorMessage}</span>
    )}

    <button
    type="submit"
    disabled={isRegistering}
    className={`login-button m-3 bg-blue-900 p-2 font-bold ${
        isRegistering ? 'disabled' : ''
      }`}>
        {isRegistering ? 'Signing Up...' : 'Sign Up'}
      </button>
</form>
        </>
    )
} 

export default SignUpComponent;