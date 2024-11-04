import React from "react";
import "./style.css";
import ExternalButton from "../components/ExternalButton";
import Icons from "../components/Icons";

interface Schedule {
  day: string;
  openHours: string;
}

interface Social {
  socialIcon: string;
  label: string;
  href?: string;
}

interface ContactProfile {
  imgPath: string;
  socials: Social[];
  buttonText: string;
  buttonHref: string;
}

interface ContactData {
  title: string;
  text: string;
  boldText: string;
  schedule: Schedule[];
  socials: Social[];
  contactProfile: ContactProfile;
}

interface ContactSectionProps {
  data: ContactData;
}

const ContactSection: React.FC<ContactSectionProps> = ({
  data: { title, text, boldText, schedule, socials, contactProfile },
}) => {
  return (
    <div
      className="text-font black-text flex flex-row items-center justify-center"
      style={{
        margin: "0px 0px 25px 0px",

        justifyContent: "space-evenly",
      }}
    >
      <div style={{ maxWidth: "520px", fontSize: "20px", margin: "10px" }}>
        <span
          className="title-font"
          style={{ color: "var(--crea-orange)", fontSize: "42px" }}
        >
          {title}
        </span>

        <p>{text}</p>
        <br />
        <p>
          <b>{boldText}</b>
        </p>
        <br />
        <span
          style={{
            color: "var(--crea-light-blue)",
            fontWeight: "bold",
            fontSize: "24px",
          }}
        >
          Horario
        </span>
        <div className="flex flex-row">
          <div
            style={{ padding: "10px 20px 0px  0px", borderRight: "1px solid" }}
          >
            <span>{schedule[0].day}</span>
            <br />
            <span>{schedule[0].openHours}</span>
          </div>
          <div style={{ padding: "10px 20px" }}>
            <span>{schedule[1].day}</span>
            <br />
            <span>{schedule[1].openHours}</span>
          </div>
        </div>
        <br />
        {socials.map((social, index) => {
          return (
            <div key={"social-" + index} className="flex mb-3">
              <Icons iconsName={social.socialIcon} />
              <span style={{ paddingLeft: "10px" }}>{social.label}</span>
            </div>
          );
        })}
      </div>
      <div className="flex flex-col items-center ">
        <div>
          <img
            src={contactProfile.imgPath}
            alt={"contact person"}
            width="350px"
          />
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          {contactProfile.socials.map((social, index) => {
            return (
              <div style={{ margin: "10px" }}>
                <Icons iconsName={social.socialIcon} />
              </div>
            );
          })}
        </div>
        <div className="white-text">
          <ExternalButton
            data={{
              label: contactProfile.buttonText,
              href: contactProfile.buttonHref,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
