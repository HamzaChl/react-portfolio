import React from "react";
import { NavLink } from "react-router-dom";
import "../css/Labos.css";

const labos = [
  { id: 1, name: "Labo 1" },
  { id: 2, name: "Labo 2" },
  { id: 3, name: "Labo 3" },
  { id: 4, name: "Labo 4" },
  { id: 5, name: "Labo 5" },
  { id: 6, name: "Labo 6" },
  { id: 7, name: "Labo 7" },
  { id: 8, name: "Labo 8" },
];

const Labos = () => {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Laboratoire</h1>
      <div className="LabosContainer">
        {labos.map((labo) => (
          <NavLink
            key={labo.id}
            to={`/labos/labo${labo.id}`}
            className="LaboCard"
          >
            <div className="LaboContent">
              <h3>{labo.name}</h3>
            </div>
          </NavLink>
        ))}
      </div>
    </>
  );
};

export default Labos;
