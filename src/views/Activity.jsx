import { useEffect, useState } from "react";
import "../styles/activity.css";


function ActivityFilter() {
  return (
    <>
      <div className="filter-cont">
        <div className="filter-by">
          <button className="act-btn urgency">Urgency</button>
          <button className="act-btn venue">Venue</button>
          <button className="act-btn act-type">Activity type</button>
        </div>
      </div>
    </>
  )
}

export default function Activity() {
  const [activity, setActivity] = useState([]);

  function getToken() {
    const tokenStr = localStorage.getItem('token')
    const token = JSON.parse(tokenStr)
    return token?.token
  }

  const token = getToken()

  useEffect(() => {
    const getActivies = async () => {
      try {
        const res = await fetch("http://localhost:5500/api/activity",
          {
            headers: {
              'Content-Type': 'application/json',
              authorization: `Bearer ${token}`
            }
          }
        );
        const data = await res.json();
        setActivity(data);
      } catch (e) {
        return e
      }
    };
    getActivies();
  }, [token]);
  return (
    <>
      <div className="main-activity">
        <ActivityFilter />
        <div className="main-element">
          <div>
            <p>
              Activity
            </p>
          </div>
          <div className="activities">
            <table>
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
                {activity.map((act) => (
                  <tr>
                    <td>{act.name}</td>
                    <td>{act.activity_type}</td>
                    <td>{act.venue}</td>
                    <td className={act.option}>{act.option}</td>
                    <td>{new Date(act.time).toDateString()}</td>
                    <td>{act.option === "mandatory" ?
                    <button className={"btn mandatory-btn"}>Register activity</button> :
                    <button className="btn register">Register activity</button>}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
