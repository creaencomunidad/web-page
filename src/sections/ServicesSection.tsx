// src/components/Header.tsx

import React from "react";
import "./style.css";
import ExternalButton from "../components/ExternalButton";

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
      className="flex-col justify-center items-center"
      style={{ margin: "35px 0px" }}
    >
      <div style={{ marginLeft: "20px" }}>
        <span
          className="title-font"
          style={{
            color: "var(--crea-light-blue)",
            fontSize: "32px",
            marginLeft: "15px",
          }}
        >
          {title}
        </span>
      </div>

      <div className="flex row justify-evenly">
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
