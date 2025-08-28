import '../styles/notfound.css';
import { Link } from 'react-router-dom';

const NoPage = () => {
    return (
      <>
      <div className="notfound-main">
        <div className="display-dex">
          <div className="notfound-info">
            <h2>Page Not Found 404</h2>
            <p><Link className="back-home" to="/">Go back home</Link></p>
          </div>
        </div>
      </div>
      </>
    );
  };
  
  export default NoPage;