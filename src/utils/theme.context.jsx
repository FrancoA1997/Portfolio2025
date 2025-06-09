import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light"); // por defecto 'light'

  // Al montar el componente, cargamos el tema guardado (si existe)
  useEffect(() => {
    const storedTheme = localStorage.getItem("preferredTheme");
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []);

  // Guardamos el tema en localStorage cuando cambie
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme); // para aplicar estilos globales
    localStorage.setItem("preferredTheme", theme);
  }, [theme]);

  // Alternar entre claro y oscuro
  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook personalizado
export const useTheme = () => useContext(ThemeContext);