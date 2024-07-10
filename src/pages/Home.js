import React from "react";
import Navigation from "../components/Navigation";

const Home = () => {
  return (
    <div className="home">
      <Navigation />
      <div className="homeContent">
        <div className="content">
          <h1>Rachid Boube</h1>
          <h2>Recherche d'une Alternance en Développement Full-Stack</h2>
          <div className="pdf">
            <a
              href="https://rachid-boube.github.io/cv-portfolio/media/CV_ALTERNANCE_IPM.pdf"
              target="_blank"
            >
              Télécharger CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
