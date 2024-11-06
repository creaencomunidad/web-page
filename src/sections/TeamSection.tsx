import React from "react";
import "./style.css";

interface Achivements {
  achivement: string;
  institution: string;
}

interface TeamMembers {
  name: string;
  imgNamePath: string;
  imgPath: string;
  imageAlt: string;
  position: string;
  vc: Achivements[];
}

interface TeamSectionData {
  title: string;
  teamMembers: TeamMembers[];
}

interface TeamSectionProps {
  data: TeamSectionData;
}

const TeamSection: React.FC<TeamSectionProps> = ({
  data: { title, teamMembers },
}) => {
  return (
    <div
      className="flex-row items-center justify-center"
      style={{
        margin: "0px 0px 35px 0px",

        justifyContent: "space-evenly",
      }}
    >
      {teamMembers.map((member, index) => {
        return (
          <div
            className="team-background flex flex-row flex-wrap "
            style={{
              padding: "20px 20px 20px 20px",
              justifyContent: "space-evenly",
            }}
            key={"teamMember-" + index}
          >
            <div>
              <img src={member.imgPath} alt={member.imageAlt} width="350px" />
            </div>
            <div className="flex flex-col justify-center">
              <img
                src={member.imgNamePath}
                alt={member.name + " photo"}
                width="500px"
              />
              <div className=" white-text text-font flex flex-col">
                {member.vc.map((item, index) => {
                  return (
                    <div key={"member-achivement-" + index}>
                      <br />
                      <span style={{ fontWeight: "bold", fontSize: "22px" }}>
                        {"  - "}
                        {item.achivement}
                      </span>
                      <br />
                      <span style={{ marginLeft: "15px", fontSize: "15px" }}>
                        {item.institution}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TeamSection;
