/* ------------------------------Imports---------------------------- */
//Styles
//Components
import {
  Routes,
  Route,
} from "react-router-dom";
import Home from "./components/home/home";
//Icons
//Props
//React
//Images
//NextJs
/*---------------------------------------------------------------------- */
function App() {
  return (
   
  
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
          </Routes>
    
  );
}

export default App;
