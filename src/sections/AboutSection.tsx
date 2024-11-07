// src/components/Header.tsx

import React from "react";
import "./style.css";
import ExternalButton from "../components/ExternalButton";

interface AboutPieces {
  title: string;
  description: string;
}

interface AboutSectionData {
  title: string;
  description: string;
  imgPath: string;
  buttonText: string;
  buttonIcon: string;
  buttonHref: string;
  aboutPieces: AboutPieces[];
}

interface AboutSectionProps {
  data: AboutSectionData;
}

const AboutSection: React.FC<AboutSectionProps> = ({
  data: {
    title,
    description,
    imgPath,
    buttonText,
    buttonIcon,
    buttonHref,
    aboutPieces,
  },
}) => {
  return (
    <div
      id="quienes-somos"
      className="flex-col justify-center items-center"
      style={{ margin: "25px 0px 25px 0px" }}
    >
      <div className="flex flex-row flex-wrap items-center justify-center">
        <div
          style={{
            width: "500px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "20px 20px 0px 20px",
          }}
        >
          <h2>
            <span style={{ display: "none" }}>About</span>
            <img src="/assets/aboutName.webp" alt="about-name" width="500px" />
          </h2>
          <p
            className="text-font black-text text-center"
            style={{ margin: "25px 0px", fontSize: "22px" }}
          >
            {description}
          </p>
          <ExternalButton
            data={{ label: buttonText, href: buttonHref, icon: buttonIcon }}
          />
        </div>

        <div className="mt-10">
          <img src={imgPath} alt="about person img" width="400px" />
        </div>
      </div>

      {aboutPieces.map((piece, index) => {
        return (
          <div
            key={"piece-" + index}
            className=" flex flex-col items-center"
            style={{
              margin: "35px 0px 40px 0px",
              padding: "20px 20px 0px 20px",
              backgroundColor: "var(--crea-dark-white)",
            }}
          >
            <h3 className="title-font crea-dark-blue-text text-center">
              {piece.title}
            </h3>
            <p
              className="text-font black-text crea-dark-blue-text"
              style={{ textAlign: "center", maxWidth: "680px" }}
            >
              {piece.description}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default AboutSection;
