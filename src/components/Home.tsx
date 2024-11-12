import React, { useEffect, useState } from "react";
import "../css/BannerText.css";
import Technologies from "./Technologies";

const BannerText: React.FC = () => {
  const [spanContent, setSpanContent] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const text = "Designer & Developer";
    const words = text.split(" ");
    const generatedSpanContent: JSX.Element[] = [];

    words.forEach((word, wordIndex) => {
      if (word) {
        const wordSpans: JSX.Element[] = [];
        const delayBase = wordIndex * 0.1;

        for (let i = 0; i < word.length; i++) {
          const letter = word[i];
          const delay = (delayBase + i * 0.1).toFixed(1) + "s";
          let className = "letter";

          if (word.toLowerCase() === "developer") {
            className += " alt-head";
          } else if (word === "&") {
            className += " alt-head special-word";
          }

          wordSpans.push(
            <span
              key={`${word}-${i}`}
              className={className}
              style={{ animationDelay: delay }}
            >
              {letter}
            </span>
          );
        }

        generatedSpanContent.push(
          <span key={wordIndex} className="word">
            {wordSpans}
          </span>,
          <span key={`space-${wordIndex}`}> </span> // Espace entre les mots
        );
      }
    });

    setSpanContent(generatedSpanContent); // Mettez à jour le contenu des spans
  }, []);

  return (
    <main className="mainContainer">
      <div className="background-text fadeIn">
        <span className="fadeIn">Portfolio</span>
      </div>
      <div className="banner-text">
        <h1 className="head-text">
          {spanContent} {/* Utilisez `spanContent` comme contenu JSX */}
        </h1>
      </div>
      <Technologies />
    </main>
  );
};

export default BannerText;
