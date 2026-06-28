import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWarning } from "@fortawesome/free-solid-svg-icons";
import { UserProfile } from "../DashComponents/middleComponent";
import "../../styles/admindash.module.css";
import { useSelector } from "react-redux";
import Footer from "../footerone";
import { SideBar } from "./adminDash";
import Login from "../../auth/login";

/**
 * Handles un authorized
 */
export function UnAuthorized() {
  return (
    <div className="unauth-cont">
      <div className="unauth-display">
        <h1 className="style-err">
          <FontAwesomeIcon
            icon={faWarning}
            size="2x"
            style={{ color: "red" }}
          />
          Unauthorized Error 403
        </h1>
        <p>
          <Link to="/" className="go-home">
            Go back home
          </Link>
        </p>
      </div>
    </div>
  );
}

export default function UnauthLayout({ children }) {
  return (
    <div>
      {children}
      <Footer />
    </div>
  );
}

/**
 * Handles admin dash layout
 */
export function AdminDashLayout({ children }) {
  const { userName, emailAddr, token, role } = useSelector(
    (state) => state.auth,
  );

  if (!token) return <Login />;
  if (role !== "admin")
    return (
      <UnauthLayout>
        <UnAuthorized />
      </UnauthLayout>
    );

  return (
    <div className="admin-dash-display">
      <SideBar />
      <div className="middle-display">
        <UserProfile userName={userName} emailAddr={emailAddr} />
        <div
          style={{
            backgroundColor: "var(--main-color)",
            height: "100%",
            width: "98%",
            marginTop: "0.7rem",
            padding: "1rem 0.1rem",
            paddingLeft: "1.2rem",
            borderRadius: "0.7rem",
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
