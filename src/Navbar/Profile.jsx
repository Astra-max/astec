import { faPowerOff } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";
import { useState } from "react";
import "../styles/index.css";

export default function Profile() {
  const [open, setOpen] = useState(false);
  const userName = useSelector((state) => state.userName);

  const HandleLogout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };

  const HandleDisplay = () => {
    setOpen(prev => !prev);
  };

  return (
    <div className="user-account">
      <div className="my-account" onClick={HandleDisplay}>
        <div className="acc-logo">{userName[0].toUpperCase()}</div>
        <p className="userName">{userName}</p>
      </div>
      {open && (
        <div className="logout">
          <ul>
            <li className="account-list" onClick={HandleLogout}>
              <FontAwesomeIcon icon={faPowerOff} />
              <p>Logout</p>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

