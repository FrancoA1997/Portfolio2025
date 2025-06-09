import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App.jsx'
import {
  BrowserRouter,
 
} from "react-router-dom";
import { ThemeProvider } from './utils/theme.context.jsx';
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <StrictMode>
    <ThemeProvider>
    <App/>
    </ThemeProvider>
  </StrictMode>,
  </BrowserRouter>
)
