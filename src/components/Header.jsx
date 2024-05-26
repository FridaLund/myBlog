import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { signOutUser } from "../firebase/authFunctions";

const Header = () => {
    const { currentUser, userLoggedIn } = useContext(AuthContext);

  return (
    <div className="flex mt-4 mx-5 justify-between items-center">
      <h1 className="text-lg font-bold"> FRIDIUM </h1>

      <nav className="flex mt-4 mx-5 justify-between items-center">
        {userLoggedIn ? (
            <>
            <Link to="/" className="m-3" > HOME </Link>
            <Link to="/write" className="m-3"> WRITE </Link>
            <button onClick={signOutUser} className="m-3"> LOG OUT </button>
            <p>User: {currentUser.email}</p>
            </>
        ) : (
            <>
            <Link to="/login" className="m-3"> LOG IN </Link>
            <Link to="/signup" className="m-3"> SIGN UP </Link>
            </>
        )}
      </nav>

    </div>
  );
};

export default Header;