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
  aboutPieces: AboutPieces[];
}

interface AboutSectionProps {
  data: AboutSectionData;
}

const AboutSection: React.FC<AboutSectionProps> = ({
  data: { title, description, imgPath, aboutPieces },
}) => {
  return (
    <div
      className="flex-col justify-center items-center"
      style={{ margin: "25px 0px 25px 0px", padding: "25px 0px" }}
    >
      <div className="flex row items-center justify-center">
        <div
          style={{
            width: "500px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img src="/assets/aboutName.png" alt="about-name" width="500px" />
          <span
            className="text-font black-text text-center"
            style={{ margin: "25px 0px", fontWeight: "bold", fontSize: "22px" }}
          >
            {description}
          </span>
          <ExternalButton data={{ label: "¡Contáctanos!", href: "#" }} />
        </div>

        <div>
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
              padding: "35px 0px",
              backgroundColor: "var(--crea-dark-white)",
            }}
          >
            <span
              className="title-font black-text crea-dark-blue-text text-center"
              style={{ fontSize: "36px" }}
            >
              {piece.title}
            </span>
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
