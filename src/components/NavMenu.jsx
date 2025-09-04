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
import { useState, useRef, useEffect } from "react";
import { useTheme } from "../utils/theme.context";
//Images
import flagEs from "../assets/navMenu/ar.svg";
import flagEn from "../assets/navMenu/us.svg";
import { useLanguage } from "../utils/language.context";
//NextJs
/*---------------------------------------------------------------------- */

const NavMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isIconTransitioning, setIsIconTransitioning] = useState(false);
  const { theme, setTheme } = useTheme();
  const { language, setLanguage } = useLanguage();
  const componentRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Si el clic no fue dentro del componente y el menú está abierto
      if (
        componentRef.current &&
        !componentRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    // Agrega el event listener al documento cuando el componente se monta
    document.addEventListener("mousedown", handleClickOutside);

    // Remueve el event listener cuando el componente se desmonta para evitar fugas de memoria
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const toggleWidget = () => {
    setIsIconTransitioning(true);

    if (isOpen) {
      console.log(isOpen);
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
      href: "home",
    },
    {
      name: "Experience",
      icon: <BackpackIcon />,
      href: "experience",
    },
    {
      name: "Stack",
      icon: <LayersIcon />,
      href: "stack",
    },
    {
      name: "Studies",
      icon: <FileTextIcon />,
      href: "studies",
    },
  ];

  return (
    <div ref={componentRef} className={`navMenu ${theme}`}>
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
            <div
              onClick={() => setLanguage("es")}
              className={
                language === "es" ? "language-item active" : "language-item "
              }
            >
              <img src={flagEs} alt="toggle-spanish-image" />
            </div>
            <div
              className={
                language === "en" ? "language-item active" : "language-item "
              }
              onClick={() => setLanguage("en")}
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
                href={`#${link.href}`}
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
