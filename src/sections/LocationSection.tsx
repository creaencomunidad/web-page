import React from "react";
import "./style.css";

interface Location {
  city: string;
  address: string;
  addressExtra: string;
  iframeLocation: string;
  urlLocation: string;
}

interface LocationData {
  title: string;
  locations: Location[];
}

interface LocationSectionProps {
  data: LocationData;
}

const LocationSection: React.FC<LocationSectionProps> = ({
  data: { title, locations },
}) => {
  return (
    <div
      id="ubicacion"
      className="location-container flex flex-col flex-wrap items-center justify-center"
      style={{
        margin: "25px 0px 25px 0px",
        padding: "20px 20px 0px 20px",

        justifyContent: "space-evenly",
      }}
    >
      <div className="location-title title-font">
        <span>{title}</span>
      </div>
      <div className="crea-dark-blue-text text-font flex flex-row flex-wrap items-center justify-center">
        {locations.map((location, index) => {
          return (
            <div
              key={"location-" + index}
              className="location-n flex flex-col items-center justify-center"
            >
              <div
                style={{
                  borderRadius: "4%", // Apply the border radius to the container
                  margin: "10px",
                  height: "60%",
                  overflow: "hidden", // Ensures content inside respects the border radius
                }}
              >
                <iframe
                  className="location-iframe"
                  src={location.iframeLocation}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <a
                href={location.urlLocation}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center"
                style={{
                  height: "40%", // Initially set to 40% to match the space, will expand if needed
                  minWidth: "100%", // Ensures it takes full width
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <span className="title-font location-city">
                  {location.city}
                </span>
                <span className="text-font location-address">
                  <b>{location.address}</b>
                </span>
                <span className="text-font location-address-extra">
                  {location.addressExtra}
                </span>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LocationSection;
