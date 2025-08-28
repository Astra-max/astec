import "../styles/index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { Outlet, Link } from "react-router-dom";
import "../styles/home.css";
import Profile from "./Profile";
//import { GoogleOAuthProvider } from '@react-oauth/google'

const Navbar = () => {
  function getToken() {
    const tokenStr = localStorage.getItem('token')
    const userToken = JSON.parse(tokenStr)
    return userToken?.token
  }

  const token = getToken()
  
  return (
    <>
      <nav className="navBar">
        <div className="logo-image">
          <h1>
            <Link to="/" className="logo">
              AsTec
            </Link>
          </h1>
        </div>
        <ul>
          <li>
            <Link to="/" className="links">
              Home
            </Link>
          </li>
          <li>
            <Link to="/activity" className="links">
              Activity
            </Link>
          </li>
          <li>
            <Link to="/dashboard" className="links">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/contact" className="links">
              Contact
            </Link>
          </li>
        </ul>
        <div className="last-nav">
          <div className="bell-alert">
            <div className="alert-div">
              <span className="alerts">10</span>
            </div>
            <FontAwesomeIcon className="bell" icon={faBell} />
          </div>
          <div className="login-cont">
            {token && <Profile/>}
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
