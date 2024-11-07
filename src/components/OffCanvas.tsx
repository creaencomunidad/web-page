import React, { useState, useRef, useEffect } from "react";

interface OffCanvasProps {
  buttonLabel: string;
  children: React.ReactNode;
}

const OffCanvas: React.FC<OffCanvasProps> = ({ buttonLabel, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  const togglePanel = () => {
    console.log("isOpen: ", isOpen), setIsOpen(!isOpen);
  };

  // Close the panel if clicked outside
  const handleClickOutside = (event: MouseEvent) => {
    if (panelRef.current && !panelRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  const handleOutsideScroll = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      window.addEventListener("scroll", handleOutsideScroll, { passive: true });

      // Calculate scrollbar width
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleOutsideScroll);

      // Restore styles
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleOutsideScroll);
    };
  }, [isOpen]);

  return (
    <div className="offcanvas-container">
      <button
        onClick={() => {
          console.log("asd");
          togglePanel();
        }}
      >
        <span style={{ fontSize: "24px" }}>{buttonLabel}</span>
        <span style={{ fontSize: "32px", marginRight: "25px" }}> ☰</span>
      </button>
      {isOpen && (
        <div
          ref={panelRef}
          style={{
            position: "fixed",
            top: "70px",
            right: 0,
            height: "calc(100% - 70px)",
            width: "200px",
            backgroundColor: "var(--crea-light-blue)",
            //boxShadow: "0px 5px 5px rgba(0,0,0,0.5)",
            padding: "1rem",
            zIndex: 1000,
          }}
        >
          {/* <button onClick={togglePanel} style={{ marginBottom: "1rem" }}>
            Close
          </button> */}
          {children}
        </div>
      )}
      {isOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            //backgroundColor: "rgba(0,0,0,0.1)",
            zIndex: 999,
          }}
        ></div>
      )}
    </div>
  );
};

export default OffCanvas;
