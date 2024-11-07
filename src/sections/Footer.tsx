// src/components/Header.tsx

import React from "react";
import Icons from "../components/Icons";

interface SocialLink {
  alt: string;
  href: string;
  label: string;
}

interface FooterData {
  socials: SocialLink[];
}

interface FooterProps {
  data: FooterData;
}

const Footer: React.FC<FooterProps> = ({ data: { socials } }) => {
  return (
    <footer
      className="footer-container"
      style={{ maxHeight: "60px", padding: "10px 0px" }}
    >
      <nav className="container mx-auto flex justify-center">
        <ul className="flex flex-wrap items-center space-x-10">
          {socials.map((item, index) => {
            return (
              <li key={"social-" + index}>
                <a
                  href={item.href}
                  className="hover:text-gray-300 title-font white-text flex items-center"
                >
                  <div
                    style={{
                      padding: "6px",
                      borderRadius: "50%",
                      backgroundColor: "white",
                      color: "var(--crea-light-blue)",
                    }}
                  >
                    <Icons iconsName={item.alt} />
                  </div>
                  <span className="footer-social-label">{item.label}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
