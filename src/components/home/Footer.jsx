/* ------------------------------Imports---------------------------- */
//Styles
import { useTheme } from "../../utils/theme.context";
import "../../scss/components/Footer/Footer.scss";
import { useLanguage } from "../../utils/language.context";
//Components
//Icons
//Props
//React
//Images
//NextJs
/*---------------------------------------------------------------------- */

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const {theme} = useTheme();
  const { language } = useLanguage();

  return (
    <footer className={`footer ${theme}`}>
      <div className="container">
        <div className="footer-content">
          <p className="copyright">
            © {currentYear}{" "}
            {language === "es"
              ? "Todos los derechos reservados"
              : "All rights reserved"}{" "}
          </p>
          <p className="developer">
            {language === "es"
              ? "Desarrollado y diseñado por "
              : "Developed and designed by"}
            <span className="highlight">Franco Alvarez</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
