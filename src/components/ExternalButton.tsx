// src/components/Header.tsx

import React from "react";
import "./style.css";
import Icons from "./Icons";

interface ExternalButtonData {
  href: string;
  label: string;
}

interface ExternalButtonProps {
  data: ExternalButtonData;
}

const ExternalButton: React.FC<ExternalButtonProps> = ({
  data: { label, href },
}) => {
  return (
    <div
      style={{
        backgroundColor: "var(--crea-orange)",
        borderRadius: "40px",
        padding: "15px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "300px",
        height: "50px",
      }}
    >
      <div style={{ margin: "10px" }}>
        <Icons iconsName="InstagramIcon" />
      </div>

      <div
        className="title-font"
        style={{ margin: "10px", paddingTop: "5px", fontWeight: "bold" }}
      >
        {label}
      </div>
    </div>
  );
};

export default ExternalButton;
