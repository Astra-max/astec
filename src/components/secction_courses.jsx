import "../styles/section_courses.css";
import Html from "../images/html5-386614_640.jpg";
import aws from "../images/aws-icon (1).svg";
import Css from "../images/css-27192_640.png";
import tailwindCss from "../images/tailwind-css-wordmark.svg";
import Javascript from "../images/React_js for Beginners — Props and State Explained.jpg";
import GitHub from "../images/Using GitHub To Improve Workflow.jpg";
import { SmallSideBar } from "./section_1";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function CourseItem(props) {
  const [start, setStart] = useState('Quick Enrol')

  function HandleClick(event) {
    event.preventDefault()
    setStart(s=>s='start now')
  }
  return (
    <>
      <div className="main-container">
        <div className="course-items-display">
          <div className="course-items">
            <div className="course-image">
              <img className="html-image" src={props.image} alt="html" />
            </div>
            <div className="course-content">
              <div className="another-container">
                <p>{props.name}</p>
                <p>{props.enrolled}</p>
                <p>{props.tution}</p>
                <div className="ratings">
                  <p>Rated </p>
                  <FontAwesomeIcon
                    icon={faStar}
                    color="gold"
                    style={{ paddingLeft: "0.4rem" }}
                  />
                  <FontAwesomeIcon icon={faStar} color="gold" />
                  <FontAwesomeIcon icon={faStar} color="gold" />
                  <FontAwesomeIcon icon={faStar} color="gold" />
                  <FontAwesomeIcon icon={faStar} color="gold" />
                </div>
              </div>
              <div className="btn-div">
                <button className="enrol-now" onClick={(event)=>HandleClick(event)}>{start}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default function Card() {
  return (
    <div>
      <div className="card-display">
        <div className="side-bar">
          <SmallSideBar />
        </div>
        <div className="display-course-block">
          <div className="first-three">
            <CourseItem
              image={Html}
              name="Basic Hyper-text markup"
              tution="Tution fee: Free!!"
            />
            <CourseItem
              image={tailwindCss}
              name="Tailwind Css Framework"
              tution="Tution fee: Free!!"
            />
            <CourseItem
              image={Javascript}
              name="Elements of Reactjs Framework"
            />
          </div>
          <div className="first-three">
            <CourseItem
              image={GitHub}
              tution="Tution fee: free!!"
              name="Version control system"
            />
            <CourseItem
              image={Css}
              tution="Tution fee: free!!"
              name="Elements of styling"
            />
            <CourseItem
              image={aws}
              name="Cloud computing AWS"
              tution="Tution fee: $10"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
