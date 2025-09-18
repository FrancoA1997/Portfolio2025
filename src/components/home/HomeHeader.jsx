/* ------------------------------Imports---------------------------- */
//Styles
import "../../scss/components/home/homeHeader.scss";
import { useTheme } from "../../utils/theme.context.jsx";
//Components

import desktop from "/images/HomeHeader/desktop.png";
import mobile from "/images/HomeHeader/mobile.png";
import tablet from "/images/HomeHeader/tablet.png";
//Icons
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  DownloadIcon,
  DimensionsIcon,
  LayersIcon,
} from "@radix-ui/react-icons";
import { useLanguage } from "../../utils/language.context.jsx";
//Props
//React
//Images
//NextJs
/*---------------------------------------------------------------------- */
const HomeHeader = () => {
  const { theme } = useTheme();
  const { language } = useLanguage();
  return (
    <header id="home" className={`homeHeader ${theme}`}>
      <div className="homeHeader__container">
        <div className="info">
          <div className="title">
            <h1>Franco Alvarez </h1>
            <h2>
              <div className="title-item">
                <LayersIcon id="icon" />
                {language === "en"
                  ? "Full stack web developer"
                  : "Desarrollador web Full Stack"}
              </div>
              <div className="title-item">
                <DimensionsIcon id="icon-frontend" />
                <strong>
                  {" "}
                  {language === "en"
                    ? "Frontend Focused"
                    : "Enfoque Frontend"}{" "}
                </strong>
              </div>
            </h2>
            <p>
              {language === "es" ? (
                <p>
                  En los últimos <span className="highlighted">2 años</span>, he
                  estado construyendo aplicaciones web, tanto en el{" "}
                  <span className="highlighted">front-end</span> como
                  aplicaciones <span className="highlighted">full-stack</span>.
                  Mi trabajo se centra en participar en cada fase del
                  desarrollo, desde la idea inicial hasta el despliegue final.
                </p>
              ) : (
                <p>
                  Over the past <span className="highlighted">2 years</span>,
                  I've been building web applications, both{" "}
                  <span className="highlighted">front-end</span> and{" "}
                  <span className="highlighted">full-stack</span>. My work
                  focuses on being involved in every phase of development, from
                  the initial idea to the final deployment.
                </p>
              )}
            </p>
          </div>
          <div className="socials">
            <a
              href="https://github.com/FrancoA1997"
              target="__blank"
              className="socials__icon"
            >
              <GitHubLogoIcon id="icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/franco-alvarez-nahuel/"
              target="__blank"
              className="socials__icon"
            >
              <LinkedInLogoIcon id="icon" />
            </a>
            <div className="socials__btn">
              <a
                href={
                  language === "en"
                    ? "/franco-alvarez-resume.pdf"
                    : "/franco-alvarez-curriculum.pdf"
                }
                download={
                  language === "en"
                    ? "franco-alvarez-resume.pdf"
                    : "franco-alvarez-curriculum.pdf"
                }
              >
                <p>
                  {language === "en" ? "Resume" : "Curriculum"} <DownloadIcon />
                </p>{" "}
              </a>
            </div>
          </div>
        </div>
        <div className="images">
          <img src={mobile} alt="mobile" className="mobile" />
          <img src={tablet} alt="tablet" className="tablet" />
          <img src={desktop} alt="desktop" className="desktop" />
          {/* <WorldMap/>
        <p className='switch-theme'>hover to Switch theme</p> */}
        </div>
      </div>
    </header>
  );
};

export default HomeHeader;
