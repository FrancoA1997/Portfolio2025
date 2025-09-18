/* ------------------------------Imports---------------------------- */
//Styles
//Components
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/home";
import ReactGA from "react-ga4";
//Icons
//Props
//React
//Images
//NextJs
/*---------------------------------------------------------------------- */
const TRACKING_ID = import.meta.env.VITE_ANALYTICS_ID; // Reemplazá con tu ID
ReactGA.initialize(TRACKING_ID);

function App() {
  ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
