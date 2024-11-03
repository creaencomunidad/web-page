// src/components/Header.tsx

import React from "react";
import Icons from "./Icons";

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
    <footer className="blue-background text-white py-4">
      <nav className="container mx-auto flex justify-center">
        <ul className="flex items-center space-x-10">
          {socials.map((item, index) => {
            return (
              <li key={"social-" + index}>
                <a
                  href={item.href}
                  className="hover:text-gray-300 title-font white-text flex items-center"
                  style={{ fontSize: "24px" }}
                >
                  <Icons iconsName={item.alt} />
                  <span style={{ paddingLeft: "5px" }}>{item.label}</span>
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
