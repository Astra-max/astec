import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/contact.css";
import { faAddressBook, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <>
      <div className="contact-container">
        <div className="display-items">
          <div className="inner-container">
            <div className="contact-main">
              <div className="contact-icon">
                <FontAwesomeIcon className="f-icon" icon={faPhoneAlt} />
              </div>
              <div className="contact-descr">
                <p className="more-descr">AsTec Academy</p>
                <p>Call us on</p>
                <p>+254796066170</p>
              </div>
            </div>
            <div className="rev-main">
              <div className="rev-contact-descr">
                <p className="more-descr">AsTec Academy</p>
                <p>Chat on WhatsApp</p>
                <p>+254796066170</p>
              </div>
               <div className="contact-icon">
                <FontAwesomeIcon className="f-icon" icon={faWhatsapp} style={{color: 'green'}}/>
              </div>
            </div>
            <div className="contact-main">
              <div className="contact-icon">
                <FontAwesomeIcon className="f-icon" icon={faAddressBook} />
              </div>
              <div className="contact-descr">
                <p className="more-descr">AsTec Academy</p>
                <p>Email us on</p>
                <p style={{color: 'blue'}}>astecacademy.asta.ac.ke</p>
              </div>
            </div>
            <div className="rev-main"> 
              <div className="contact-descr">
                <p className="more-descr">AsTec Academy</p>
                <p>LinkedIn account</p>
                <p style={{color: 'blue'}}>Astec Academy</p>
              </div>
              <div className="contact-icon">
                <FontAwesomeIcon className="f-icon" icon={faLinkedinIn} style={{color: 'blue'}}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
