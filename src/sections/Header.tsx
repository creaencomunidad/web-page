import React from "react";

interface Sections {
  href: string;
  label: string;
}

interface HeaderData {
  logoPath: string;
  alt: string;
  sections: Sections[];
}

interface HeaderProps {
  data: HeaderData;
}

const Header: React.FC<HeaderProps> = ({
  data: { logoPath, alt, sections },
}) => {
  return (
    <div className="header-container">
      <header className="blue-background text-white py-4">
        <nav className="container mx-auto flex flex-wrap justify-around items-center">
          <ul className="flex flex-wrap justify-center items-center space-x-10">
            <li>
              <h1>
                <a href="#">
                  <img src={logoPath} width="120px" alt={alt} />
                </a>
              </h1>
            </li>

            {sections.map((section, index) => {
              return (
                <li key={"section-" + index}>
                  <a
                    href={section.href}
                    className="hover:text-gray-300 title-font white-text"
                    style={{ fontSize: "18px" }}
                  >
                    {section.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
