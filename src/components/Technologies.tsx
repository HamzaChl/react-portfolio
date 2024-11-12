import React from "react";
import styles from "../App.module.css";
import "../css/Cards.css";

interface CardProps {
  imageSrc: string;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ imageSrc, title, description }) => {
  return (
    <div className="card">
      <div
        className="image"
        style={{ backgroundImage: `url(${imageSrc})` }}
      ></div>
      <div className="content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

const Technologies = () => {
  return (
    <div className={styles.technologiesContainer}>
      <h2>Technologies</h2>
      <p>
        J'utilise des technologies qui me permettent de créer des projets
        alliant design soigné et développement performant. <br /> Elles me
        permettent de travailler de manière créative et efficace, tout en
        restant collaboratif.
      </p>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        <Card
          imageSrc="https://raw.githubusercontent.com/HamzaChl/portfolio-imagesUrls/main/photoshop.png"
          title="Photoshop"
          description="Pour le design visuel"
        />
        <Card
          imageSrc="https://raw.githubusercontent.com/HamzaChl/portfolio-imagesUrls/main/photoshop.png"
          title="Illustrator"
          description="This is a description of card 1."
        />
        <Card
          imageSrc="https://raw.githubusercontent.com/HamzaChl/portfolio-imagesUrls/main/photoshop.png"
          title="Figma"
          description="This is a description of card 1."
        />
        <Card
          imageSrc="https://raw.githubusercontent.com/HamzaChl/portfolio-imagesUrls/main/photoshop.png"
          title="TypeScript"
          description="This is a description of card 1."
        />
        <Card
          imageSrc="https://raw.githubusercontent.com/HamzaChl/portfolio-imagesUrls/main/photoshop.png"
          title="React"
          description="This is a description of card 1."
        />
        <Card
          imageSrc="https://raw.githubusercontent.com/HamzaChl/portfolio-imagesUrls/main/photoshop.png"
          title="Git"
          description="This is a description of card 1."
        />
        <Card
          imageSrc="https://raw.githubusercontent.com/HamzaChl/portfolio-imagesUrls/main/photoshop.png"
          title="NodeJS"
          description="This is a description of card 1."
        />
        <Card
          imageSrc="https://raw.githubusercontent.com/HamzaChl/portfolio-imagesUrls/main/photoshop.png"
          title="MongoDB"
          description="This is a description of card 1."
        />
      </div>
    </div>
  );
};

export default Technologies;
