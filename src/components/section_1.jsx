import {
  faAddressBook,
  faBookOpenReader,
  faIndustry,
  faLock,
  faUserGraduate,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/section_1.css";
import { useState } from "react";
import { faUnlock } from "@fortawesome/free-solid-svg-icons/faUnlock";
import { faFilterCircleDollar } from "@fortawesome/free-solid-svg-icons/faFilterCircleDollar";

export default function SectionOne() {
  return (
    <>
      <div className="one-section">
        <div className="our-success">
          <p className="suc-note">Our progress and success over the years</p>
        </div>
        <div className="one-display">
          <div className="one-item">
            <div className="color-me"></div>
            <FontAwesomeIcon icon={faBookOpenReader} className="icon" />
            <div className="description">
              <p className="numbers">9k</p>
              <p>Enrolled students</p>
            </div>
          </div>
          <div className="one-item">
            <div className="color-me2"></div>
            <FontAwesomeIcon icon={faAddressBook} className="icon" />
            <div className="description">
              <p className="numbers">401</p>
              <p>Available courses</p>
            </div>
          </div>
          <div className="one-item">
            <div className="color-me3"></div>
            <FontAwesomeIcon icon={faUserGraduate} className="icon" />
            <div className="description">
              <p className="numbers">100k</p>
              <p>Alumni community</p>
            </div>
          </div>
          <div className="one-item">
            <FontAwesomeIcon icon={faIndustry} className="icon" />
            <div className="description">
              <div className="color-me4"></div>
              <p className="numbers">40k</p>
              <p>Placed graduates</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export function SmallSideBar() {
  const [isChecked, setIsChecked] = useState(false);
  const [isLocked, setUnlocked] = useState(faUnlock);

  function HandleUnlocked() {
    setUnlocked(isLocked)
    
  }


  function handlesCheckboxChange() {
    setIsChecked(!isChecked);
  }


  return (
    <>
      <div className="sidebar-container">
        <div className="side-element">
          <div className="check-course">
            <p className="select">Select and enroll courses</p>
            <div className="search">
              <p>Filter By <FontAwesomeIcon icon={faFilterCircleDollar}/>:</p>
              <select className="select-course" placeholder="select study program....">
                <option>click to select study program ....</option>
                <option>Software engineering and Design</option>
                <option>Machine Learning/Ai</option>
                <option>Cloud Computing (AWS)</option>
                <option>Database Administration</option>
                <option>Cyber Security (CEH)</option>
                <option>Systems programming (IoT - Rust)</option>
              </select>
            </div>
          </div>
          <div className="checkboxes">
            <label>
              <input
                type="checkbox"
                checked={isChecked}
                onChange={handlesCheckboxChange}
              />
              <span>Basic Html</span>
            </label>
            <label>
              <input type="checkbox" />
              <span>styling with Css</span>
            </label>
            <label>
              <input type="checkbox" />
              <span>Basic Javascript programming</span>
            </label>
            <label>
              <input type="checkbox" />
              <span>Fundaments of python programming</span>
            </label>
            <label>
              <input type="checkbox" />
              <span>web mastery with ReactJS</span>
            </label>
            <label>
              <input type="checkbox" />
              <span>version control Git</span>
            </label>
            <label>
              <input type="checkbox" />
              <span>Backend dev NodeJS</span>
            </label>
            <label>
              <input type="checkbox" />
              <span>Backend dev Django</span>
            </label>
            <label>
              <input type="checkbox" />
              <span>master Express Js</span>
            </label>
            <label>
              <input type="checkbox" />
              <span>mastery of MongoDB</span>
            </label>
            <label>
              <input type="checkbox" />
              <span>Basics of Rest API</span>
            </label>
            <label>
              <input type="checkbox" />
              <span>AWS cloud computing</span>
            </label>
            <label>
              <input type="checkbox" />
              <span>Basics of NextJS</span>
            </label>
            <label>
              <input type="checkbox" />
              <span>programming Typescript</span>
            </label>
            <div className="certificate">
              <div className="display-certif">
                <button onClick={() => HandleUnlocked} className="display-btn">
                  <FontAwesomeIcon
                    icon={faLock}
                    style={{ paddingRight: "1rem" }}
                  /> 
                  Download certificate
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
