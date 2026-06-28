import { faFilePdf, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProjectAnalytics from "../DashComponents/Analz";
import { useNavigate } from "react-router-dom";
import { ComingEvent } from "../DashComponents/middleComponent";

export function CourseResource() {
  const navigate = useNavigate();
  const ressources = [
    { id: 1, name: "HTML for designers" },
    { id: 2, name: "basic css styling" },
    { id: 3, name: "tailwind pro designer" },
    { id: 4, name: "bott machine learning guide" },
    { id: 5, name: "nodejs in action guide" },
    { id: 6, name: "javascript for profesionals" },
    { id: 7, name: "python programming basics" },
    { id: 8, name: "Go programming for pro" },
    { id: 9, name: "python for data analysis" },
    { id: 10, name: "aws cloud computing" },
  ];

  /**
   * Handles handle remove course
   */
  function HandleRemoveCourse(courseId, course) {
    const response = window.confirm(`Confirm you are removing ${course}`);

    if (response) return alert(`removed ${course} successfully`);
    return alert(`Failed to removed ${course}`);
  }
  return (
    <div
      style={{
        height: "22rem",
        width: "17rem",
        borderRadius: "0.4rem",
        backgroundColor: "#fff",
        padding: "1rem",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingBottom: "2rem",
        }}
      >
        <p style={{ fontWeight: "bold", opacity: 0.6, fontSize: "1rem" }}>
          Course resources
        </p>
        <button
          style={{
            height: "1.7rem",
            width: "4rem",
            border: "0.1rem solid #000",
            borderRadius: "2rem",
            fontSize: "0.7rem",
            backgroundColor: "#fff",
            cursor: "pointer",
          }}
          onClick={() => navigate("/admin/dashboard/course")}
        >
          <FontAwesomeIcon
            icon={faPlus}
            style={{ fontSize: "0.7rem", paddingRight: "0.4rem" }}
          />
          New
        </button>
      </div>
      <div style={{}}>
        {ressources.map((val) => (
          <span
            key={val.name}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              paddingBottom: "0.4rem",
              opacity: "0.7",
            }}
          >
            <p>
              <FontAwesomeIcon icon={faFilePdf} /> {val.name}{" "}
            </p>
            <p>
              <FontAwesomeIcon
                icon={faTrash}
                color="red"
                style={{ paddingLeft: "0.8rem" }}
                onClick={() => HandleRemoveCourse(val.id, val.name)}
              />
            </p>
          </span>
        ))}
      </div>
    </div>
  );
}

export default function MiddleUI() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "start",
        width: "97%",
        justifyContent: "space-between",
        margin: "2rem 0rem",
      }}
    >
      <ProjectAnalytics />
      <ComingEvent />
      {/*<CircularProgress percentage={90} />*/}
      <div>
        <CourseResource />
      </div>
    </div>
  );
}
