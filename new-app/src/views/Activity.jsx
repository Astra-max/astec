import { useEffect, useState } from "react";
import "../styles/activity.css";
import API from "../util/axios";
import { useDispatch, useSelector } from "react-redux";
import { registerActivity } from "../store/activitySlice";
import NoActivity from "../components/noActivity";

function ActivityFilter() {
  return (
    <div className="filter-cont">
      <div className="filter-by">
        <select className="urgency">
          <option>select with options</option>
          <option>optional</option>
          <option>mandatory</option>
        </select>
        <select className="venue">
          Venue
          <option>Astec</option>
          <option>Discord</option>
          <option>zoom meeting</option>
        </select>
        <select className="act-type">
          <option>peer learning</option>
          <option>social interaction</option>
          <option>mock test</option>
          <option>Hackerthone</option>
          <option>projects</option>
        </select>
      </div>
    </div>
  );
}

export default function Activity() {
  const [activity, setActivity] = useState([]);
  const dispatch = useDispatch();
  const { registeredActivities } = useSelector((state) => state.activity);
  const { userId } = useSelector((state) => state.auth);
  const [actDetails] = useState({
    userId: userId,
    actId: 0,
    activity: "",
  });

  useEffect(() => {
    API.get("/activity")
      .then((res) => setActivity(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleRegister = (actId) => {
    dispatch(registerActivity({ ...actDetails, ...actId }));
  };

  return (
    <>
      {activity.length <= 0 ? (
        <NoActivity />
      ) : (
        <div className="main-activity">
          <ActivityFilter />
          <div className="main-element">
            <div>
              <p>Activity</p>
            </div>
            <div className="activities">
              <table className="style-table">
                <thead>
                  <tr>
                    <th className="thead">Activity</th>
                    <th className="thead">Activity type</th>
                    <th className="thead">Venue</th>
                    <th className="thead">Option</th>
                    <th className="thead">Time</th>
                    <th className="thead">Register activity</th>
                  </tr>
                </thead>
                <tbody>
                  {activity.map((act) => {
                    const actDate = new Date(act.time);
                    const today = new Date();

                    const isRegistered = registeredActivities.includes(act.id);
                    const isExpired = today > actDate && !isRegistered;
                    const comingEvents =
                      actDate.getMonth() - 1 > today.getMonth() ||
                      actDate.getFullYear() > today.getFullYear();
                    console.log(today.getDay() - actDate.getDay());

                    let btnStyle = {
                      backgroundColor: "var(--main-theme)",
                    };
                    let btnText = "Register activity";
                    let disabled = false;

                    if (comingEvents) {
                      btnStyle = {
                        backgroundColor: "orange",
                        color: "#fff",
                        opacity: "0.6",
                        cursor: "not-allowed",
                      };
                      btnText = "coming soon";
                      disabled = true;
                    }

                    if (isExpired) {
                      btnStyle = {
                        backgroundColor: "red",
                        color: "#fff",
                        opacity: "0.6",
                        cursor: "not-allowed",
                      };
                      btnText = "Missed Activity";
                      disabled = true;
                    } else if (isRegistered) {
                      btnStyle = {
                        backgroundColor: "green",
                        color: "#fff",
                        opacity: "0.4",
                        cursor: "not-allowed",
                      };
                      btnText = "Activity Registered";
                      disabled = true;
                    }

                    return (
                      <tr key={act.id}>
                        <td>{act.name}</td>
                        <td>{act.activity_type}</td>
                        <td>{act.venue}</td>
                        <td className={act.option}>{act.option}</td>
                        <td>{actDate.toDateString()}</td>
                        <td>
                          <button
                            className="act-btn"
                            style={btnStyle}
                            disabled={disabled}
                            onClick={() =>
                              handleRegister({
                                ...actDetails,
                                activity: act.name,
                                actId: act.id,
                              })
                            }
                          >
                            {btnText}
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
