import React, { useEffect, useState } from "react";
import "../css/BannerText.css";

const BannerText: React.FC = () => {
  const [spanContent, setSpanContent] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const lines = [["Designer", "&"], ["Developer"]];
    const generatedSpanContent: JSX.Element[] = [];

    lines.forEach((line, lineIndex) => {
      const lineContent: JSX.Element[] = [];

      line.forEach((word, wordIndex) => {
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

        lineContent.push(
          <span key={`${lineIndex}-${wordIndex}`} className="word">
            {wordSpans}
          </span>,
          <span key={`space-${lineIndex}-${wordIndex}`}> </span> // Espace entre les mots
        );
      });

      generatedSpanContent.push(
        <div key={`line-${lineIndex}`} className="line">
          {lineContent}
        </div>
      );
    });

    setSpanContent(generatedSpanContent); // Mettez à jour le contenu des spans
  }, []);

  return (
    <main className="mainContainer">
      <div className="background-text fadeIn">
        <span className="fadeIn">Portfolio</span>
      </div>
      <div className="banner-text">
        <h1 className="head-text">{spanContent}</h1>
      </div>
      <div className="img">hdaziooia</div>
    </main>
  );
};

export default BannerText;
