// src/components/Header.tsx

import React from "react";
import "./style.css";
import ExternalButton from "../components/ExternalButton";

interface HeroData {
  title: string;
  subTitle: string;
  buttonText: string;
  buttonHref: string;
}

interface HeroProps {
  data: HeroData;
}

const Hero: React.FC<HeroProps> = ({
  data: { title, subTitle, buttonText, buttonHref },
}) => {
  return (
    <div className="hero-background">
      {/* <img src="/assets/heroBackground.png" alt="hero-background" /> */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-evenly",
          maxWidth: "530px",
        }}
      >
        <span
          className="title-font"
          style={{ fontSize: "42px", fontWeight: "bold" }}
        >
          {title}
        </span>
        <span className="text-font">{subTitle}</span>
        <ExternalButton data={{ label: buttonText, href: buttonHref }} />
      </div>
      <div>
        <img src="/assets/heroPerson.png" alt="hero person" width="400px" />
      </div>
      {/* <span style={{ color: "red" }}>{title}</span> */}
    </div>
  );
};

export default Hero;
