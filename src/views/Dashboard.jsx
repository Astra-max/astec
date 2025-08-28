import "../styles/dashboard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMailBulk,
  faBookOpenReader,
  faFlag,
  faHome,
  faPager,
  faPowerOff,
  faDumpster,
  faTerminal,
  faChartLine,
  faTrophy,
  faNavicon,
} from "@fortawesome/free-solid-svg-icons";
import { faBookBookmark } from "@fortawesome/free-solid-svg-icons/faBookBookmark";
import { faHouseLaptop } from "@fortawesome/free-solid-svg-icons/faHouseLaptop";
import { faTimeline } from "@fortawesome/free-solid-svg-icons/faTimeline";
import { faDownload } from "@fortawesome/free-solid-svg-icons/faDownload";
import UserProfile from "../DashComponents/UserProfile";

export default function DashboardUI() {
  return (
    <>
      <div className="main-cont">
        <div className="sibling-sect1">
          <div className="side-nav">
            <div className="toggle">
              <FontAwesomeIcon icon={faNavicon} />
              <p>DashBoard</p>
            </div>
            <div className="home dash">
              <FontAwesomeIcon icon={faHome} />
              Home
            </div>
            <div className="dash">
              <FontAwesomeIcon icon={faBookOpenReader} />
              My courses
            </div>
            <div className="dash">
              <FontAwesomeIcon icon={faBookBookmark} />
              Activity
            </div>
            <div className="dash">
              <FontAwesomeIcon icon={faChartLine} />
              Progress
            </div>
            <div className="dash">
              <FontAwesomeIcon icon={faTrophy} />
              Achivements
            </div>
            <div className="dash">
              <FontAwesomeIcon icon={faMailBulk} />
              Chat Room
            </div>
            <div className="dash">
              <FontAwesomeIcon icon={faHouseLaptop} />
              Materials
            </div>
             <div className="dash">
              <FontAwesomeIcon icon={faTerminal} />
              Work station
            </div>
            <div className="dash">
              <FontAwesomeIcon icon={faTimeline} />
              Schedule
            </div>
            <div className="dash">
              <FontAwesomeIcon icon={faFlag} />
              Transparency
            </div>
            <div className="dash">
              <FontAwesomeIcon icon={faPager} />
              Report issue
            </div>
            <div className="dash">
              <FontAwesomeIcon icon={faDownload} />
              Download certificate
            </div>
            <div className="logout dash">
              <FontAwesomeIcon icon={faPowerOff} />
              Logout
            </div>
            <div className="delete dash">
              <FontAwesomeIcon icon={faDumpster} />
              Remove Account
            </div>
          </div>
        </div>
        <UserProfile />
      </div>
    </>
  );
}

