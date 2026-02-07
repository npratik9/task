import { useNavigate } from "react-router-dom";
import "../styles/dashboard.css"

const Dashboard=()=> {
    const navigate= useNavigate()
    const logout = () => {
    localStorage.removeItem("token");
    navigate("/login")
  };

  return (
    <div className="page-wrapper">
      <div className="container">
        <h1>**!Welcome To Dashboard!**</h1>
        <p>You are logged in</p>
        <button onClick={logout}>Logout</button>
      </div>
    </div>
  );
}

export default Dashboard;
