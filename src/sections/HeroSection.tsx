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
    <div className="hero-container">
      {/* <img src="/assets/heroBackground.png" alt="hero-background" /> */}
      <div className="hero-left" style={{}}>
        <span className="title-font hero-title">{title}</span>
        <span className="text-font">{subTitle}</span>
        <ExternalButton
          data={{ label: buttonText, href: buttonHref, internal: true }}
        />
      </div>
      <div>
        <img
          src="/assets/heroPerson.png"
          alt="hero person"
          width="400px"
          style={{ position: "relative", bottom: "-30px" }}
        />
      </div>
    </div>
  );
};

export default Hero;
