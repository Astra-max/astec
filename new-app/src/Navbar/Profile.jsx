import { faPowerOff } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import "../styles/index.css";
import { logout } from "../store/authSlice";


export default function Profile() {
  const [open, setOpen] = useState(false);
  const {userName} = useSelector((state) => state.auth);
  const dispatch = useDispatch()

  const HandleDisplay = () => {
    setOpen(prev => !prev);
  };
  function HandleLogout() {
    dispatch(logout())
    window.location.href = '/'
  }

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