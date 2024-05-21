import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";


const Header = () => {

const { userName } = useContext(UserContext);

  return (
    <div className="p-4 flex justify-between items-center bg-sky-500">
      <h1>MEDIUM</h1>
        <Link to="/" >HOME</Link>
        <Link to="/Write" >WRITE</Link>
        <Link to="/Sign in">SIGN IN</Link>
        <p >{userName}</p>
      </div>
  );
};

export default Header;