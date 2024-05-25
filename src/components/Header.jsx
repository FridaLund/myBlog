import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="p-4 flex justify-between items-center">
      <h1> MEDIUM </h1>
        <Link to="/" > HOME </Link>
        <Link to="/write" > WRITE </Link>
        <Link to="/signin"> SIGN IN </Link>

      </div>
  );
};

export default Header;