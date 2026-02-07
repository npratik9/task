import { Link } from "react-router-dom";
import "../styles/header.css"

const Header = () => {
  return (
    <header className="header-container">
      <h1 className="logo">My App</h1>
      <nav>
        <ul className="nav-links">
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
