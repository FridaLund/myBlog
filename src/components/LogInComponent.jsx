import React, { useState, useContext } from "react";
import { Navigate, Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { signInUser } from "../firebase/authFunctions";

const LogInComponent = () => {
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
        Please log in here: 
        </h3>
    </div>

    <form onSubmit={onSubmit} className="">
        <div>
            <label className=""> E-mail: </label>
            <input 
            type="email" 
            autoComplete="email"
            required
            value={email}
            onChange={(e) => {
                setEmail(e.target.value);
            }}
            className=""
            />
        </div>

        <div className="">
            <label className=""> Password: </label>
            <input 
            type="password" 
            autoComplete="current-password"
            required
            value={password}
            onChange={(e) => {
                setPassword(e.target.value);
            }}
            className="" 
            />   
        </div>

        {errorMessage && (
              <span className="text-red-600 font-bold">{errorMessage}</span>
            )}

        <button 
        type="submit"
        disabled={isSigningIn}
        className={`login-button ${
            isSigningIn ? 'disabled' : ''
          }`}>
             {isSigningIn ? 'Signing In...' : 'Log in'}
         </button>
    </form>

    <p className="text-center text-sm">
            Don't have an account?{" "}
            <Link to={"/signup"} className="">
              Sign up
            </Link>
          </p>
       </>
    )
}

export default LogInComponent;