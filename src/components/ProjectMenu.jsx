/* ------------------------------Imports---------------------------- */
//Styles
import "../scss/components/ProjectMenu.scss";
//Components

//Icons
import {
  HamburgerMenuIcon,
  Cross1Icon,

} from "@radix-ui/react-icons";
//Props
//React
import { useState } from "react";
import { useTheme } from "../utils/theme.context";
//Images
import flagEs from "../assets/navMenu/ar.svg";
import flagEn from "../assets/navMenu/us.svg";
//NextJs
/*---------------------------------------------------------------------- */

const ProjectMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isIconTransitioning, setIsIconTransitioning] = useState(false);
  const { theme, setTheme } = useTheme();
  const toggleWidget = () => {
    setIsIconTransitioning(true);

    if (isOpen) {
      // Primero iniciamos la animación de los iconos
      setTimeout(() => {
        // Luego iniciamos la animación de cierre del widget
        setIsAnimating(false);
        setTimeout(() => {
          // Finalmente ocultamos el widget
          setIsOpen(false);
        }, 300);
      }, 10);
    } else {
      // Primero mostramos el widget (pero sin animación)
      setIsOpen(true);
      // Luego iniciamos la animación
      setTimeout(() => {
        setIsAnimating(true);
      }, 10);
    }

    // Resetear la animación del icono después de completarse
    setTimeout(() => {
      setIsIconTransitioning(false);
    }, 300);
  };

  return (
    <div className={`projectMenu ${theme}`}>
      {isOpen && (
        <div
          className={`projectMenu__container ${isAnimating ? "show" : "hide"}`}
        >
          {/* Header */}
          <div className="widget-header">
            <div className="language-toggle">
              <h3>language </h3>
              <div className="language-items">
                <div className="language-item">
                  <img src={flagEs} alt="toggle-spanish-image" />
                </div>
                <div className="language-item active">
                  <img src={flagEn} alt="toggle-english-image" />
                </div>
              </div>
              <h3>Theme </h3>
              <div className="theme-items ">
                <div
                  onClick={() => setTheme("dark")}
                  className={
                    theme === "dark" ? "theme-item active" : "theme-item"
                  }
                >
                  <MoonIcon className="icon" id="moon" />
                </div>
                <div
                  onClick={() => setTheme("light")}
                  className={
                    theme === "light" ? "theme-item active" : "theme-item"
                  }
                >
                  <SunIcon className="icon" id="sun" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Toggle button */}
      <button
        aria-label="menu-button"
        onClick={toggleWidget}
        className="toggle-button"
      >
        <div className="icon-wrapper">
          {/* Ambos iconos están siempre presentes, pero con diferentes opacidades */}
          <div
            className={`icon-container whatsapp-container ${
              !isOpen && isIconTransitioning ? "rotating-reverse" : ""
            } ${!isOpen ? "fade-in" : "fade-out"}`}
          >
            <HamburgerMenuIcon className="icon" />
          </div>

          <div
            className={`icon-container close-container ${
              isOpen && isIconTransitioning ? "rotating" : ""
            } ${isOpen ? "fade-in" : "fade-out"}`}
          >
            <Cross1Icon className="icon" />
          </div>
        </div>
      </button>
    </div>
  );
};

export default ProjectMenu;
