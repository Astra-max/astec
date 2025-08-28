import "../styles/home.css";
import HomeImage from "../images/body.svg";
//import { GoogleOAuthProvider } from '@react-oauth/google';

const Home = () => {
  return (
    <div className="home-cont">
      <div className="home-display">
        <p className="inbold">Welcome to Astec Code Academy</p>
        <p className="welcome-note">
          Join ASTEC, our coding school, and embark on an exciting journey into
          the world of technology. Whether you're a beginner eager to learn the
          basics or an experienced coder looking to sharpen your skills, ASTEC
          is the place for you. Our courses are designed to provide you with
          hands-on experience and practical knowledge that you can apply in
          real-world scenarios.
        </p>
        <button className="join-btn">start now!!!</button>
      </div>
      <div className="home-image">
        <img className="hm-image" src={HomeImage} alt="section one" />
      </div>
    </div>
  );
};

export default Home;
