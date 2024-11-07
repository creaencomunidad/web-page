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
      <div className="hero-left">
        <h2 className="title-font">{title}</h2>
        <p className="text-font">{subTitle}</p>
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
