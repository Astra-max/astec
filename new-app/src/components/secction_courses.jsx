import "../styles/section_courses.css";
import Html from "../images/html5-386614_640.jpg";
import aws from "../images/aws-icon.svg";
import Css from "../images/css-27192_640.png";
import tailwindCss from "../images/tailwind-css-wordmark.svg";
import Javascript from "../images/React_js for Beginners — Props and State Explained.jpg";
import GitHub from "../images/Using GitHub To Improve Workflow.jpg";
import { SmallSideBar } from "./section_1";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { registerCourse } from "../store/courseSlice";
import { useDispatch, useSelector } from "react-redux";

function CourseItem() {
  const { userId } = useSelector((state) => state.auth);
  const [details] = useState({ userId: userId, course: "", courseId: 0 });

  const dispatch = useDispatch();

  const [cardElements, setElement] = useState([
    {
      id: 1,
      image: Html,
      name: "Basic Hyper-text markup",
      tution: "Tution fee: Free!!",
      courseProgress: 'Quick enroll'
    },
    {
      id: 2,
      image: tailwindCss,
      name: "Tailwind Css Framework",
      tution: "Tution fee: Free!!",
      courseProgress: 'Quick enroll'
    },
    {
      id: 3,
      image: Javascript,
      name: "Basic Hyper-text markup",
      tution: "Tution fee: Free!!",
      courseProgress: 'Quick enroll'

    },
    {
      id: 4,
      image: GitHub,
      name: "Version control system",
      tution: "Tution fee: Free!!",
      courseProgress: 'Quick enroll'
    },
    {
      id: 5,
      image: Css,
      name: "web styling css",
      tution: "Tution fee: Free!!",
      courseProgress: 'Quick enroll'

    },
    {
      id: 6,
      image: aws,
      name: "Cloud computing AWS",
      tution: "Tution fee: $10",
      courseProgress: 'Quick enroll'
    },
  ]);

  function HandleClick(courseName) {
    setElement([...cardElements])
    dispatch(registerCourse({ ...courseName}));
  }

  return (
    <>
      {cardElements.map((val) => {
        return (
          <div className="card-container">
            <div className="course-items-display">
              <div className="course-items">
                <div className="course-image">
                  <img className="html-image" src={val.image} alt="html" />
                </div>
                <div className="course-content">
                  <div className="another-container">
                    <p>{val.name}</p>
                    <p>{val.tution}</p>
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
                    <button
                      className="enrol-now"
                      onClick={() =>
                        HandleClick({ ...details, course: val.name, courseId: val.id, courseProgress: val.courseProgress })
                      }
                    >
                      {val.courseProgress}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default function Card() {
  return (
    <div>
      <div className="card-section">
        <div className="side-bar">
          <SmallSideBar />
        </div>
        <div className="card-display">
          <CourseItem />
        </div>
      </div>
    </div>
  );
}
