/* ------------------------------Imports---------------------------- */
//Styles
import "../scss/components/NavMenu.scss";
//Components
//Icons
import {
  InfoCircledIcon,
  BackpackIcon,
  ChatBubbleIcon,
  HomeIcon,
  FileTextIcon,
  LayersIcon,
  HamburgerMenuIcon,
  Cross1Icon,
  MoonIcon,
  SunIcon,
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

const NavMenu = () => {
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
        }, 200);
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

  const links = [
    {
      name: "Home",
      icon: <HomeIcon />,
    },
    {
      name: "Experience",
      icon: <BackpackIcon />,
    },
    {
      name: "About me",
      icon: <InfoCircledIcon />,
    },
    {
      name: "Stack",
      icon: <LayersIcon />,
    },
    {
      name: "Studies",
      icon: <FileTextIcon />,
    },
    {
      name: "Contact",
      icon: <ChatBubbleIcon />,
    },
  ];

  return (
    <div className={`navMenu ${theme}`}>
      {isOpen && (
        <div className={`navMenu__theme ${isAnimating ? "show" : "hide"}`}>
          <div className="theme-items">
            <div
              className={theme === "light" ? "theme-item active" : "theme-item"}
              onClick={() => setTheme("light")}
            >
            <SunIcon className="icon" id="sun" />
            </div>
            <div
              className={theme === "dark" ? "theme-item active" : "theme-item"}
              onClick={() => setTheme("dark")}
            >
              <MoonIcon className="icon" id="moon" />
            </div>
          </div>
        </div>
      )}
      {isOpen && (
        <div className={`navMenu__language ${isAnimating ? "show" : "hide"}`}>
          <div className="language-items">
            <div className="language-item" >
              <img src={flagEs} alt="toggle-spanish-image" />
            </div>
            <div
              className="language-item active"
             
            >
              <img src={flagEn} alt="toggle-english-image" />
            </div>
          </div>
        </div>
      )}
      {isOpen && (
        <div className={`navMenu__container ${isAnimating ? "show" : "hide"}`}>
          {/* Contact options */}
          <div className="links-container">
            {links.map((link) => (
              <a
                href={`#`}
                target="__blank"
                key={link.name}
                className="links-item"
              >
                <div className="links-content">
                  <div className="links-info">
                    <div className="links-name">{link.name}</div>
                  </div>
                  <div className="links-icon">{link.icon}</div>
                </div>
              </a>
            ))}
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

export default NavMenu;
