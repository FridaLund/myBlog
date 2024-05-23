import React, { useState, useContext } from "react";
import { Navigate, Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { signInUser } from "../firebase/authFunctions";

const LogIn = () => {
    const { userLoggedIn } = useContext(AuthContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isSigningIn, setIsSigningIn] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const onSubmit = async (e) => {
        e.preventDefault();
        if (!isSigningIn) {
          setIsSigningIn(true);
          await signInUser(email, password);
        }
      };
    
    return (
       <>
        {userLoggedIn && <Navigate to={"/"} replace={true} />}

        <div className="">
            <h3 className="">
                Create a new account
            </h3>
        </div>

        <form onSubmit={onSubmit}>
            <div>
                <label > E-mail </label>
                <input 
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => {
                    setEmail(e.target.value);
                }}
                className=""/>
            </div>
            
            <div>
                <label className="">
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
                className=""
                />
            </div>

            <div>
                <label className="">
                    Confirm password 
                </label>
                <input 
                disabled={isRegistering}
                type="password" 
                autoComplete="off"
                required
                value={confirmPassword}
                onChange={(e) =>{
                    setconfirmPassword(e.target.value);
                }}
                className=""/>
            </div>

            {errorMessage && (
                <span className=""> {errorMessage}</span>
            )}

            <button
            type="submit"
            disabled={isRegistering}
            className={`login-button ${
                isSigningIn ? 'disabled' : ''
              }`}>
                {isSigningIn ? 'Signing In...' : 'Sign In'}
              </button>
        </form>
        <p className="login-signup">
            Don't have an account?{' '}
            <Link to={'/register'} className="login-signup-link">
              Sign up
            </Link>
        </p>


       </>
    )
}

export default LogIn;