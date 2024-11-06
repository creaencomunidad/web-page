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
        <span
          className="title-font"
          style={{
            color: "var(--crea-light-blue)",
            fontSize: "48px",
          }}
        >
          {title}
        </span>
      </div>

      <div className="flex flex-row flex-wrap justify-evenly">
        {services.map((service, index) => {
          return (
            <div key={"service-" + index}>
              <img
                src={service.imgPath}
                alt={"img-" + service.title}
                width="370px"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServicesSection;
