/* ------------------------------Imports---------------------------- */
//Styles
import "../../scss/components/home/homeHeader.scss";
import { useTheme } from "../../utils/theme.context.jsx";
//Components
import WorldMap from "../ui/WorldMap";
import desktop from "/images/HomeHeader/desktop.png";
import mobile from "/images/HomeHeader/mobile.png";
import tablet from "/images/HomeHeader/tablet.png";
//Icons
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  DownloadIcon,
  EyeOpenIcon,
  DimensionsIcon,
  LayersIcon,
} from "@radix-ui/react-icons";

//Props
//React
//Images
//NextJs
/*---------------------------------------------------------------------- */
const HomeHeader = () => {
  const { theme } = useTheme();
  return (
    <header className={`homeHeader ${theme}`}>
      <div className="homeHeader__container">
        {theme === "light" ? (
          <div key={"light"} className="background-light" />
        ) : (
          <div key={"dark"} className="background-dark" />
        )}
        <div className="info">
          <div className="title">
            <h1>Franco Alvarez </h1>
            <h2>
              <LayersIcon id="icon" />
              Full stack web developer |<DimensionsIcon id="icon-frontend" />
              <strong> Frontend Focused </strong>
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
              doloribus, quia libero voluptate deserunt ea corrupti esse nobis,
              provident perferendis alias laboriosam quis? Deleniti quaerat,
              dignissimos harum magni eveniet dolorum excepturi, aperiam, quasi
              nemo ut dolor sequi. Exercitationem ea inventore fuga commodi.
            </p>
          </div>
          <div className="socials">
            <div className="socials__icon">
              <GitHubLogoIcon id="icon" />
            </div>
            <div className="socials__icon">
              <LinkedInLogoIcon id="icon" />
            </div>
            <div className="socials__btn">
              <button>
                My resume <DownloadIcon />{" "}
              </button>
            </div>
            <div className="socials__btn">
              <button>
                See projects <EyeOpenIcon />
              </button>
            </div>
          </div>
        </div>
        <div className="images">
          <img src={mobile} alt="mobile" id="mobile" />
          <img src={tablet} alt="tablet" id="tablet" />
          <img src={desktop} alt="desktop" id="desktop" />
          {/* <WorldMap/>
        <p className='switch-theme'>hover to Switch theme</p> */}
        </div>
      </div>
    </header>
  );
};

export default HomeHeader;
