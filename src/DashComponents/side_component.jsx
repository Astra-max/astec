import { faAdjust, faBookReader, faDashboard, faFilePdf, faGauge, faPowerOff, faSatellite, faTerminal } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import '../styles/dash.css'

function SidePanel() {
  
  return (
    <>
      <div className="side-panel-main">
        <div className="dash-logo">
          <Link to="/" className="dash-astec">AA <span className="dash-aa">Academy</span></Link>
        </div>
        <div className="menu">
          <p className="menu-ptag">Menu</p>
          <div className="menu-elements">
            <p className={"menu-elements-p"} ><FontAwesomeIcon icon={faDashboard} style={{paddingRight: '0.5rem',opacity: '0.7'}}/>Dashboard</p>
            <p className={"menu-elements-p"}><FontAwesomeIcon icon={faAdjust} style={{paddingRight: '0.5rem',opacity: '0.7'}} />Activities</p>
            <p className={"menu-elements-p"} ><FontAwesomeIcon icon={faBookReader} style={{paddingRight: '0.5rem',opacity: '0.7'}}/>My course</p>
            <p className={"menu-elements-p"} ><FontAwesomeIcon icon={faFilePdf} style={{paddingRight: '0.5rem',opacity: '0.7'}}/>Resources</p>
            <p className={"menu-elements-p"} ><FontAwesomeIcon icon={faTerminal} style={{paddingRight: '0.5rem',opacity: '0.7'}}/>Work space</p>
          </div>
        </div>
        <div className="general-settings">
          <p className="settings-ptag">General</p>
          <div className="gen-settings">
            <p className="gen-settings-p"><FontAwesomeIcon icon={faSatellite} style={{paddingRight: '0.5rem',opacity: '0.7'}}/>settings</p>
            <p className="gen-settings-p"><FontAwesomeIcon icon={faGauge} style={{paddingRight: '0.5rem',opacity: '0.7'}}/>Help</p>
            <p className="gen-settings-p"><FontAwesomeIcon icon={faPowerOff} style={{paddingRight: '0.5rem',opacity: '0.7'}}/>logout</p>
          </div>
        </div>
        <div className="asset-downloads"></div>
      </div>
    </>
  )
}

export default SidePanel