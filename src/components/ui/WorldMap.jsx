/* ------------------------------Imports---------------------------- */
//Styles
import "../../scss/components/ui/WorldMap.scss";
import { useTheme } from "../../utils/theme.context";
//Components
//Icons
//Props
//React
//Images
import map from "/w-map.png";
//NextJs
/*---------------------------------------------------------------------- */
const WorldMap = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className="worldMap" onClick={() => toggleTheme()}>
      <div className="worldMap__container">
        <div className="glow" />
        <div
          className="hover"
          data-text={
            theme === "light" ? "Switch dark mode" : "Switch light mode"
          }
        />
        <div className="frontface">
          <img src={map} alt="world_map" />
          <img src={map} alt="world_map" />
        </div>
        <div className="middleFace" />
        <div className="backface">
          <img src={map} alt="world_map" />
          <img src={map} alt="world_map" />
        </div>
      </div>
    </div>
  );
};

export default WorldMap;
