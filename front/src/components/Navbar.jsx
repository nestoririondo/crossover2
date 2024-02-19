import "../styles/navbar.css";
import { useAuth } from "../context/useAuth";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const startProject = () => {
    if (!user) {
      alert("Please login first");
    } else {
      navigate("/new-project");
    }
  };

  return (
    <nav>
      <div className="navbar">
        <p>FundMyCode</p>
        {user ? (
          <div className="user">
            <p>
              Welcome, <span>{user.name}</span>!
            </p>
            <button onClick={logout}>Logout</button>
          </div>
        ) : (
          <div className="login-signup">
            <button onClick={() => navigate("/login")}>Login</button>
            <button onClick={() => navigate("/signup")}>Signup</button>
          </div>
        )}
        <button onClick={() => startProject()}>Start Project</button>
      </div>
    </nav>
  );
};

export default Navbar;
