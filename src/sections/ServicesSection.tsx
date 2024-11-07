// src/components/Header.tsx

import React from "react";
import "./style.css";

interface Services {
  title: string;
  imgPath: string;
}

interface ServicesData {
  title: string;
  services: Services[];
}

interface ServicesProps {
  data: ServicesData;
}

const ServicesSection: React.FC<ServicesProps> = ({
  data: { title, services },
}) => {
  return (
    <div
      id="servicios"
      className="flex-col justify-center items-center"
      style={{ margin: "35px 0px", padding: "20px 20px 0px 20px" }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <h2
          className="title-font"
          style={{
            color: "var(--crea-light-blue)",
            //fontSize: "48px",
          }}
        >
          {title}
        </h2>
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          marginTop: "10px",
        }}
      >
        {services.map((service, index) => (
          <div
            key={"service-" + index}
            className="responsive-image-container"
            style={{
              padding: "8px",
              width: "100%",
              maxWidth: "370px",
              minWidth: "100px",
              boxSizing: "border-box",
            }}
          >
            <img
              src={service.imgPath}
              alt={"img-" + service.title}
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
