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


  function handlesCheckboxChange(e) {
    const res = window.confirm(`You are about to register \n${e.target.value}`)
    if (res) setIsChecked(!isChecked);
  }


  return (
    <>
      <div className="sidebar-container">
        <div className="side-element">
          <div className="check-course">
            <p className="select">Select and enroll courses</p>
            <div className="search">
              <p>Filter By :</p>
              <select className="select-course" placeholder="select course category">
                <option>select and enroll course category</option>
                <option>Software engineering and Design</option>
                <option>Machine Learning/Ai</option>
                <option>Cloud Computing (AWS)</option>
                <option>Database Administration</option>
                <option>Cyber Security (CEH)</option>
                <option>Systems programming (IoT - Rust)</option>
                <option>Data structure and algorithms</option>
              </select>
            </div>
          </div>
          <div className="checkboxes">
            <label>
              <input
                type="checkbox"
                value="Basic Hyper-text markup"
                checked={isChecked}
                onChange={(e)=>handlesCheckboxChange(e)}
              />
              <span>Basic Hyper-text markup</span>
            </label>
            <label>
              <input type="checkbox" />
              <span>web styling basic css tricks</span>
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
              <span>Version control Git and GitHub</span>
            </label>
            <label>
              <input type="checkbox" />
              <span>Master backend dev with NodeJS</span>
            </label>
            <label>
              <input type="checkbox" />
              <span>Backend development Django (python)</span>
            </label>
            <label>
              <input type="checkbox" />
              <span>Master Express Js for seniors</span>
            </label>
            <label>
              <input type="checkbox" />
              <span>Master data persistance (MongoDB)</span>
            </label>
            <label>
              <input type="checkbox" />
              <span>Data sharing and transfer (Rest API)</span>
            </label>
            <label>
              <input type="checkbox" />
              <span>AWS cloud computing</span>
            </label>
            <label>
              <input type="checkbox" />
              <span>Master NextJS advanced react</span>
            </label>
            <label>
              <input type="checkbox" />
              <span>programming safely with Typescript</span>
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
