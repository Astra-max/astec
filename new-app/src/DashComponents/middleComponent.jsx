import {
  faBell,
  faCircleArrowRight,
  faCloudArrowUp,
  faWarning,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";
import "../styles/dash.css";
import "../styles/analytics.css";
import ProjectAnalytics from "./Analz";
import Regina from "../images/regina_kate.jpg";
import Julie from "../images/julie.jpg";
import Amit from "../images/simon.jpg";
import yashica from "../images/yasica.jpg";

function UserProfile() {
  const { userName, emailAddr } = useSelector((state) => state.auth);
  return (
    <>
      <div className="profile-cont">
        <div className="search-cont">
          <input
            className="search-bar"
            type="search"
            placeholder="enter something..."
          />
        </div>
        <div className="dash-profile">
          <span className="notification-bell">
            <FontAwesomeIcon icon={faBell} />
          </span>
          <div className="account-container">
            <span className="pic">{userName[0].toUpperCase()}</span>
            <div className="user-email">
              <p className="userName">{userName}</p>
              <p className="email">{emailAddr}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function Progress() {
  return (
    <div className="progress-div">
      <div className="dash-enroll">
        <p>DashBoard</p>
        <div className="add-course">
          <button className="dash-btn add-course-btn">Add Course</button>
          <button className="dash-btn goto-wk">Go to workspace</button>
        </div>
      </div>
      <div className="dash-progress">
        <p className="progress-info">
          <FontAwesomeIcon icon={faWarning} />
          Ongoing activity requiring mandatory registration
        </p>
        <div className="progress-card">
          <div className="card total-course">
            <span>
              <p className="first-p">Enrolled courses</p>
              <FontAwesomeIcon
                className="progress-icon"
                icon={faCircleArrowRight}
              />
            </span>
            <p className="item-num">7</p>
            <span className="lower-span">
              <FontAwesomeIcon
                icon={faCloudArrowUp}
                style={{
                  position: "absolute",
                  color: "black",
                  paddingLeft: "1rem",
                }}
              />
              <p className="lower-ptag ptags">Increased from last month</p>
            </span>
          </div>
          <div className="card">
            <span>
              <p className="first-p">completed courses</p>
              <FontAwesomeIcon
                className="progress-icon"
                icon={faCircleArrowRight}
              />
            </span>
            <p className="item-num">10</p>
            <span className="lower-span">
              <FontAwesomeIcon
                className="lower-info"
                icon={faCloudArrowUp}
                style={{ position: "absolute", paddingLeft: "1rem" }}
              />
              <p className="ptags">Increased from last month</p>
            </span>
          </div>
          <div className="card">
            <span>
              <p className="first-p">Ongoing courses</p>
              <FontAwesomeIcon
                className="progress-icon"
                icon={faCircleArrowRight}
              />
            </span>
            <p className="item-num">7</p>
            <span className="lower-span">
              <FontAwesomeIcon
                icon={faCloudArrowUp}
                style={{ position: "absolute", paddingLeft: "1rem" }}
              />
              <p className="ptags">Increased from last month</p>
            </span>
          </div>
          <div className="card">
            <span>
              <p className="first-p">Active events</p>
              <FontAwesomeIcon
                className="progress-icon"
                icon={faCircleArrowRight}
                style={{ paddingTop: "1.1rem" }}
              />
            </span>
            <p className="item-num">3</p>
            <span className="lower-span">
              <p>actively ongoing</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function Analytics() {
  let offlineStyle = {
    color: "green",
    width: "3rem",
    textAlign: "center",
    fontWeight: "bolder",
    fontSize: "0.7rem",
    paddingBottom: "0.2rem",
    height: "0.8rem",
    backgroundColor: "#c0bfbf",
    borderRadius: "0.5rem",
  };
  const team = [
    {
      id: 1,
      name: "Julie kate",
      email: "juliekate@gmail.com",
      active: "active",
      image: Julie,
    },
    {
      id: 2,
      name: "Regina mishra",
      email: "regina24@gmail.com",
      active: "active",
      image: Regina,
    },
    {
      id: 3,
      name: "Yashica steve",
      email: "yashica256@gmail.com",
      active: "offline",
      image: yashica,
    },
    {
      id: 4,
      name: "Amit bhai",
      email: "amitbhai@gmail.com",
      active: "active",
      image: Amit,
    },
  ];

  return (
    <div className="analytic-main-cont">
      <div className="analytics-col">
        <div className="analytics-cont">
          <div className="analytics">
            <ProjectAnalytics />
          </div>
          <div className="reminder">
            <p className="reminder-p">Reminders</p>
            <div className="remainder-type">
              <p className="dsa-coding">Weekly DSA coding Hackerthone</p>
              <p className="coding-time">Time: 09:00am-12:00pm</p>
            </div>
            <div className="center-btn">
              <button className="reminder-btn">start session</button>
            </div>
          </div>
        </div>
        <div className="colab-container">
          <div className="agile-team">
            <div className="project-team">
              <p className="team-name">Cancer detection project</p>
              <p>Active</p>
            </div>
            {team.map((member) => {
                let offline = { ...offlineStyle,color: "green" };
              if (member.active === "offline") {
                offline = { ...offlineStyle,color: "red" };
              }

              return (
                <div className="member-profile">
                  <img
                    className="member-pic"
                    src={member.image}
                    alt="cancer-team"
                  />
                  <div className="memeber-data">
                    <div className="name-email">
                      <p className="name">{member.name}</p>
                      <p>{member.email}</p>
                    </div>
                    <div>
                      <p style={offline}>
                        {member.active}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="project-resources"></div>
        </div>
      </div>
      <div className="project-timer">
        <div className="project-cont"></div>
        <div className="timer-cont"></div>
      </div>
    </div>
  );
}

function NestedMiddle() {
  return (
    <div className="nest-middle-dsplay">
      <Progress />
      <Analytics />
    </div>
  );
}

export default function MiddleUI() {
  return (
    <div className="middle-dash-display">
      <UserProfile />
      <NestedMiddle />
    </div>
  );
}
