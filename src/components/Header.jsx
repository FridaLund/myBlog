import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { signOutUser } from "../firebase/authFunctions";

const Header = () => {
    const { currentUser, userLoggedIn } = useContext(AuthContext);

  return (
    <div className="flex mt-4 mx-5 justify-between items-center">
      <h1> FRIDIUM </h1>

      <nav>
        {userLoggedIn ? (
            <>
            <Link to="/" > HOME </Link>
            <Link to="/write" > WRITE </Link>
            <p>User: {currentUser.email}</p>
            <button onClick={signOutUser}> Log out </button>
            </>
        ) : (
            <>
            <Link to="/login"> LOG IN </Link>
            <Link to="/signup"> SIGN UP </Link>
            </>
        )}
      </nav>

    </div>
  );
};

export default Header;