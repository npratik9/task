
import { Link } from "react-router-dom";
import "../styles/auth.css"; 

const NotFound = () => {
  return (
    <div className="auth-container">
      <h2>404 - Page Not Found</h2>
      <p>The page you are looking for does not exist.</p>
      <Link to="/" >Go to Homepage</Link>
    </div>
  );
};

export default NotFound;
