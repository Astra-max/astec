import "../../styles/admindash.module.css";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation, useNavigate } from "react-router-dom";
import { logout } from "../../store/authSlice";
import {
  faBook,
  faChalkboardUser,
  faChartLine,
  faDashboard,
  faFilePdf,
  faPlus,
  faSatelliteDish,
  faServer,
  faSignOut,
  faUser,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

/**
 * Handles side bar
 */
export function SideBar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const active = {
    fontWeight: "bold",
    opacity: "0.6",
    icon: "var(--main-theme)",
  };

  /**
   * Handles handle logout
   */
  function HandleLogout() {
    dispatch(logout());
    navigate("/");
  }

  return (
    <div className="admin-side-bar">
      <div className="adm-side">
        <div className="admin-logo">
          <h1>
            <span
              style={{
                fontWeight: "bold",
                color: "#000",
                fontSize: "1.6rem",
                paddingRight: "0.5rem",
              }}
            >
              AA
            </span>
            Astec
          </h1>
        </div>
        <div className="admin-elements">
          <div className="section-one">
            <div
              style={pathname === "/admin/dashboard" ? active : {}}
              className="admin-elem"
              onClick={() => navigate("/admin/dashboard")}
            >
              <FontAwesomeIcon icon={faDashboard} color={""} />
              <p>DashBoard</p>
            </div>
            <div
              className="admin-elem"
              style={pathname === "/admin/dashboard/users" ? active : {}}
              onClick={() => navigate("/admin/dashboard/users")}
            >
              <FontAwesomeIcon icon={faUsers} color={""} />
              <p>Learners</p>
            </div>
            <div
              className="admin-elem"
              style={pathname === "/admin/dashboard/activity" ? active : {}}
              onClick={() => navigate(`/admin/dashboard/activity`)}
            >
              <FontAwesomeIcon icon={faDashboard} />
              <p>Activity</p>
            </div>
            <div
              className="admin-elem"
              style={pathname === "/admin/dashboard/course" ? active : {}}
              onClick={() => navigate("/admin/dashboard/course")}
            >
              <FontAwesomeIcon icon={faBook} />
              <p>Courses</p>
            </div>
            <div
              className="admin-elem"
              style={pathname === "/admin/dashboard/resource" ? active : {}}
              onClick={() => navigate("/admin/dashboard/resource")}
            >
              <FontAwesomeIcon icon={faFilePdf} />
              <p>Resources</p>
            </div>
            <div
              className="admin-elem"
              style={pathname === "/admin/dashboard/analysis" ? active : {}}
              onClick={() => navigate("/admin/dashboard/analysis")}
            >
              <FontAwesomeIcon icon={faChartLine} />
              <p>Analysis</p>
            </div>
            <div
              className="admin-elem"
              style={pathname === "/admin/dashboard/analysis" ? active : {}}
              onClick={() => navigate("/admin/dashboard/analysis")}
            >
              <FontAwesomeIcon icon={faChalkboardUser} />
              <p>Management</p>
            </div>
          </div>
          <div className="section-two">
            <p>General</p>
            <div
              className="admin-elem"
              style={pathname === "/admin/dashboard/profile" ? active : {}}
              onClick={() => navigate("/admin/dashboard/profile")}
            >
              <FontAwesomeIcon icon={faUser} />
              <p>Profile</p>
            </div>
            <div
              className="admin-elem"
              style={pathname === "/admin/dashboard/settings" ? active : {}}
            >
              <FontAwesomeIcon icon={faSatelliteDish} />
              <p>Settings</p>
            </div>
            <div
              className="admin-elem"
              style={
                pathname === "/admin/dashboard/server-health" ? active : {}
              }
            >
              <FontAwesomeIcon icon={faServer} />
              <p>Systems</p>
            </div>
            <div className="admin-elem" onClick={HandleLogout}>
              <FontAwesomeIcon icon={faSignOut} color="red" />
              <p>Logout</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Handles admin home
 */
export function AdminHome() {
  const data = [
    { id: 1, title: "Active Learners", number: 200, footer: "see more..." },
    {
      id: 2,
      title: "Available courses",
      number: 530,
      footer: "available courses",
    },
    {
      id: 3,
      title: "Available resources",
      number: 900,
      footer: "learning resources",
    },
    {
      id: 4,
      title: "Alumni coummuity",
      number: 870,
      footer: "alumni community",
    },
  ];

  return (
    <div>
      <div className="set-reminder-cont">
        <div>
          <p style={{ fontSize: "1.3rem", fontWeight: "bold", opacity: "0.6" }}>
            Dashboard
          </p>
        </div>
        <div style={{ display: "flex", gap: "1rem" }}>
          <button className="btn-set set-reminder">
            <FontAwesomeIcon icon={faPlus} style={{ paddingRight: "0.4rem" }} />
            reminder
          </button>
          <button className="btn-set do-later">project evaluation</button>
        </div>
      </div>
      <div className="display-admin-card">
        {data.map((val) => {
          return <DataCard key={val.title} values={val} />;
        })}
      </div>
    </div>
  );
}

/**
 * Handles data card
 */
function DataCard({ values }) {
  const styledCondition = values.id === 1 ? "first-card" : "admin-card-cont";
  const numColor = values.id === 1 ? "#fff" : "rgb(7, 201, 185)";
  return (
    <div key={values.id} className={styledCondition}>
      <div className="card-title">
        <p>{values.title}</p>
      </div>
      <div className="card-data">
        <p
          style={{
            fontSize: "1.8rem",
            fontWeight: "bold",
            color: numColor,
          }}
        >
          {values.number}
        </p>
      </div>
      <div className="card-footer">
        <p>{values.footer}</p>
      </div>
    </div>
  );
}
