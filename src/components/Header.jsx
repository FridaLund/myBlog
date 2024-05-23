import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="p-4 flex justify-between items-center bg-sky-500">
      <h1>MEDIUM</h1>
        <Link to="/" >HOME</Link>
        <Link to="/Write" >WRITE</Link>
        <Link to="/Sign in">SIGN IN</Link>

      </div>
  );
};

export default Header;