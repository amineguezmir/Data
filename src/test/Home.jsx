import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

const Home = () => {
  return (
    <div className="home-container">
      <h2 className="title">Welcome !</h2>

      <p className="description">Choose where you want to go:</p>

      <div className="button-container">
        <Link to="/test" className="link">
          <button className="custom-button">
            Go to ilots-de-fraicheur-espaces-verts-frais
          </button>
        </Link>
        <Link to="/test2" className="link">
          <button className="custom-button">
            Go to Ilots de fraîcheur-Equipements/Activités
          </button>
        </Link>
        <Link to="/test3" className="link">
          <button className="custom-button">Go to Fontaines à boire</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
