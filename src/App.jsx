/* ------------------------------Imports---------------------------- */
//Styles
//Components
import { lazy, Suspense, useEffect } from 'react';
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
   
    <Suspense fallback={<p>loading</p>}>
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
          </Routes>
    </Suspense>
  );
}

export default App;
