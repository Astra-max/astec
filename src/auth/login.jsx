import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faLock, faUnlock } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faGoogle, faGithub } from "@fortawesome/free-brands-svg-icons";

import "../styles/login.css";
import { loginUser } from "../store/authSlice";
import SignUp from "../auth/singUp";

const Login = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);

  const [email, setEmail] = useState("");
  const [passwd, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const [toggle, setToggle] = useState({isToggled: false})

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !passwd) {
      alert("Both fields are required!");
      return;
    }

    dispatch(loginUser({ email, passwd }));
  };

  const passInputStyle = {
    position: "absolute",
    marginLeft: "0.5rem",
    marginTop: "0.7rem",
    opacity: "0.7",
  };

  return (
    <div className="login-container">
      {!isSignUp ? (
        <div className="minor-cont">
          <div className="descrip-logo">
            <h2 className="descr-logo">AsTec Academy</h2>
          </div>
          <div className="central-area">
            <p className="big-welcome">Welcome Back</p>
            <p className="welcome-more">Please enter your details</p>
            <div className="login-sign">
              <button type="button" className="btn login">
                Login
              </button>
              <button
                type="button"
                className="btn signin"
                onClick={() => setIsSignUp(true)}
              >
                SignUp
              </button>
            </div>
            <form className="info-sect" onSubmit={handleSubmit}>
              <span className="input-wrapper">
                <FontAwesomeIcon icon={faBook} style={passInputStyle} />
                <input
                  className="input"
                  type="email"
                  placeholder="johndoe@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </span>
              <span className="input-wrapper">
                <FontAwesomeIcon icon={toggle.isToggled?faLock:faUnlock} style={passInputStyle} onClick={()=>setToggle(tg=>({...tg,isToggled: !tg.isToggled}))}/>
                <input
                  className="input"
                  type={!toggle.isToggled?"password":"text"}
                  placeholder="*********"
                  value={passwd}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </span>
              {error && <p style={{ color: "red" }}>{error}</p>}
              <button className="continue" type="submit" disabled={loading}>
                {loading ? "Loading..." : "Continue"}
              </button>
            </form>
          </div>
          <div className="or">
            <span className="or-span">or</span>
          </div>
          <div className="social-login">
            <span className="spans">
              <FontAwesomeIcon icon={faFacebookF} color="blue" />
            </span>
            <span className="spans">
              <FontAwesomeIcon icon={faGoogle} color="black" />
            </span>
            <span className="spans">
              <FontAwesomeIcon icon={faGithub} color="gold" />
            </span>
          </div>
          <div className="motivationals">
            <p>
              Join millions of like-minded learners who are eager to learn new skills. Login to
              success!
            </p>
          </div>
        </div>
      ) : (
        <SignUp onSwitch={() => setIsSignUp(false)} />
      )}

      <div className="minor-cont2">
        <img src="body_1.jpg" alt="login-pic" />
      </div>
    </div>
  );
};

export default Login;