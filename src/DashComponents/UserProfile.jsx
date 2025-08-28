import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/dashboard.css"
import Progress from "./Progress";
import {useSelector} from 'react-redux';


export default function UserProfile() {
  const userName = useSelector(state=>state.userName)
    return (
        <div className="major-user-cont">
          <div className="user-cont">
            <p>Home</p>
            <input className="search-input" type="search" placeholder="Enter something....." />
            <div className="profile">
                <FontAwesomeIcon icon={faUser} />
                <p className="user-name">{userName}</p>
            </div>
          </div>
          <Progress />
          <TechnicalStaff />
        </div>
    )
}

function TechnicalStaff() {
  const staff = [
    {pic: "howard.jpg",name: 'Waore Maxwel', role: 'Founder'},
    {pic: "imram.jpg",name: 'Imram Stephens', role: 'Sponser'},
    {pic: "howard.jpg",name: 'Everlyne Wanjiru', role: 'Co-Founder'},
    {pic: "imram.jpg",name: 'James Peterson', role: 'Technical staff'},
    {pic: "imram.jpg",name: 'Imram Stephens', role: 'Technical staff'},
    {pic: "howard.jpg",name: 'MaryAnne Awuor', role: 'Technical tutor'},
  ]
  return (
    <div className="staff-main">
      {staff.map(stf => 
        <div className="staff">
            <img className="tech-photo" src={stf.pic} alt="techincal-photo" />
            <div>
              <p className="tech-name">{stf.name}</p>
              <p className="tech-role">{stf.role}</p>
            </div>
        </div>    
      )}
    </div>
  )
}