import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "../../css/Labos.css";

interface Student {
  id: number;
  naam: string;
  leeftijd: number;
}

const Labo1 = () => {
  let random: number = Math.random();
  let getal1: number = Math.floor(Math.random() * 10);
  let getal2: number = Math.floor(Math.random() * 10);

  let slotImages = [
    "/slot-cherry-cce8464b32439efb4f79fba017477125.png",
    "/slot-lemon-52cd7112e8b6d398f97e69f8ce2da623.png",
    "/slot-melon-593489676a762d464eaea97127970d28.png",
    "/slot-prune-e486170eb7c22e6e9aed5de0316b5209.png",
    "/slot-seven-e71e0d10655b5491197925624b5ac139.png",
  ];

  let slot1 = Math.floor(Math.random() * 5);
  let slot2 = Math.floor(Math.random() * 5);
  let slot3 = Math.floor(Math.random() * 5);

  let winning: boolean = slot1 === slot2 && slot2 === slot3;

  let studenten: Student[] = [
    { id: 0, naam: "Jef", leeftijd: 20 },
    { id: 0, naam: "Jan", leeftijd: 21 },
    { id: 0, naam: "Joris", leeftijd: 22 },
    { id: 0, naam: "Andie", leeftijd: 23 },
    { id: 0, naam: "Senne", leeftijd: 24 },
  ];
  let numbers: number[] = [1, 2, 3, 4, 1, 1];
  return (
    <>
      <div className="labo-Container">
        <NavLink to={"/labos"}>
          <i className="fa-solid fa-arrow-left-long"></i>
        </NavLink>
        <h1 style={{ textAlign: "center" }}>Labo 1</h1>
        <div>
          <h2>Labo 1.1: Expressies</h2>
          <p>Random : {random}</p>
          <p>Getal 1 : {getal1}</p>
          <p>Getal 2 : {getal2}</p>
          <p>
            {getal1} * {getal2} : {getal1 * getal2}{" "}
          </p>
        </div>
        <div>
          <h2>Labo 1.2: Slots</h2>
          <img
            src="/slot-cherry-cce8464b32439efb4f79fba017477125.png"
            alt="cherry"
            width="100"
          />
          <img
            src="/slot-lemon-52cd7112e8b6d398f97e69f8ce2da623.png"
            alt="lemon"
            width="100"
          />
          <img
            src="/slot-melon-593489676a762d464eaea97127970d28.png"
            alt="melon"
            width="100"
          />
          <img
            src="/slot-prune-e486170eb7c22e6e9aed5de0316b5209.png"
            alt="prune"
            width="100"
          />
          <img
            src="/slot-seven-e71e0d10655b5491197925624b5ac139.png"
            alt="seven"
            width="100"
          />
          {winning ? <p>Je hebt gewonnen!</p> : <p>Je hebt verloren!</p>}
          <img src={slotImages[slot1]} alt="slot1" width="100" />
          <img src={slotImages[slot2]} alt="slot2" width="100" />
          <img src={slotImages[slot3]} alt="slot3" width="100" />
        </div>
        <div>
          <h2>Labo 1.3: Lijsten</h2>
          <h3>Getallenlijst</h3>
          <ul>
            {numbers.map((number, index) => (
              <li key={index}>{number}</li>
            ))}
          </ul>
          <h3>Studentenlijst</h3>
          <ol>
            {studenten.map((student) => (
              <li key={student.id}> {student.naam}</li>
            ))}
          </ol>
          <h3>Studentenlijst met J</h3>
          {studenten
            .filter((student) => student.naam.startsWith("J"))
            .map((student) => (
              <li key={student.id}>{student.naam}</li>
            ))}
          <h3>Select</h3>
          <select>
            {studenten.map((student) => (
              <option>{student.naam}</option>
            ))}
          </select>
          <h3>Table</h3>
          <table>
            <thead>
              <th>Naam</th>
              <th>Leeftijd</th>
            </thead>
            <tbody>
              {studenten.map((student) => (
                <tr>
                  <td>{student.naam}</td>
                  <td>{student.leeftijd}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Labo1;
