// src/components/Header.tsx

import React from "react";
import Icons from "./Icons";

interface ExternalButtonData {
  href: string;
  label: string;
  icon?: string;
  internal?: boolean;
}

interface ExternalButtonProps {
  data: ExternalButtonData;
}

const ExternalButton: React.FC<ExternalButtonProps> = ({
  data: { label, href, icon = "PointerIcon", internal = false },
}) => {
  return (
    <button
      style={{
        backgroundColor: "var(--crea-orange)",
        borderRadius: "40px",
        padding: "15px",
        margin: "20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "300px",
        height: "50px",
        border: "none", // Remove default button border
        cursor: "pointer", // Explicitly define cursor for clarity
        textDecoration: "none", // Ensure no underline (since it's a button)
        color: "#ffffff", // Default text color to white (adjust based on --crea-orange's darkness)
        fontWeight: "bold", // Moved from the inner div to the button for simplicity
      }}
      type="button" // Specify the type to avoid unintended form submissions
    >
      <a
        href={href}
        target={internal ? "" : "_blank"}
        rel="noopener noreferrer external"
        className="flex flex-row"
      >
        <div className="flex items-center" style={{ margin: "10px" }}>
          <Icons iconsName={icon} />
        </div>
        <div
          className="title-font"
          style={{ margin: "10px", paddingTop: "5px" }}
        >
          {label}
        </div>
      </a>
    </button>
  );
};

export default ExternalButton;
