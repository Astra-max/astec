import "../../styles/note.module.css";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/**
 * Handles note
 */
const Note = ({ isOpen, onClose, userName }) => {
  const ref = useRef(false);
  const [warn, setWarning] = useState({ warn: "warning", message: "" });
  const [checked, setChecked] = useState(false);
  const hideNote = ref.current;

  if (!isOpen) return null;

  // stopPropagation prevents closing when clicking inside modal
  function HandleSent(e, userName) {
    e.preventDefault();
    if (checked) {
      alert(`${warn.warn} sent to everyone succesfully`);
      onClose();
      return;
    }
    alert(`${warn.warn} sent to ${userName} succesfully`);
    onClose();
  }

  return (
    <form onSubmit={HandleSent}>
      {!hideNote && (
        <div className="note-overlay" onClick={onClose}>
          <div className="note-main-cont" onClick={(e) => e.stopPropagation()}>
            <div className="note-cont">
              {checked ? (
                <p className="note-note">Sending a {warn.warn} to everyone</p>
              ) : (
                <p className="note-note">
                  Send a {warn.warn} to {userName}
                </p>
              )}
              <FontAwesomeIcon
                icon={faX}
                style={{ fontSize: "0.8rem", color: "red", cursor: "pointer" }}
                onClick={onClose}
              />
            </div>
            <div className="note-type">
              <p>Note type</p>
              <select
                onChange={(e) =>
                  setWarning((w) => ({ ...w, warn: e.target.value }))
                }
              >
                <option>warning</option>
                <option>reminder</option>
                <option>message</option>
              </select>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <input
                type="checkbox"
                checked={checked}
                onChange={() => setChecked(!checked)}
              />
              <p style={{ paddingLeft: "0.6rem" }}>
                send a {warn.warn} to everyone
              </p>
            </div>
            <textarea
              className="note-input"
              placeholder={
                !checked
                  ? `sending a ${warn.warn} to ${userName}`
                  : `sending a ${warn.warn} to everyone`
              }
              onChange={(event) =>
                setWarning((w) => ({ ...w, message: event.target.value }))
              }
              required
            />

            <div className="note-btn">
              <button className="n-btn cancel-btn" onClick={onClose}>
                Cancel
              </button>
              <button
                type="submit"
                className="n-btn submit-btn"
                onClick={(e) => HandleSent(e, userName)}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </form>
  );
};

export default Note;
