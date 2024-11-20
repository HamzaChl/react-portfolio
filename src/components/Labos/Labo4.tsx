import React from "react";
import { NavLink } from "react-router-dom";

const Labo2: React.FC = () => {
  return (
    <div className="labo-Container">
      <NavLink to={"/labos"}>
        <i className="fa-solid fa-arrow-left-long"></i>
      </NavLink>
      <h1 style={{ textAlign: "center" }}>Labo 4</h1>
      <p>Contenu spécifique au Labo 4.</p>
    </div>
  );
};

export default Labo2;
