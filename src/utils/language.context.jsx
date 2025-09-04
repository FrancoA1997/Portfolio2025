import { createContext, useContext, useEffect, useState } from "react";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en"); // por defecto 'light'

  // Al montar el componente, cargamos el tema guardado (si existe)
  useEffect(() => {
    const storedLanguage = localStorage.getItem("language");
    if (storedLanguage) {
      setLanguage(storedLanguage);
    }
  }, []);

  // Guardamos el tema en localStorage cuando cambie
  useEffect(() => {
 
    localStorage.setItem("language", language);
  }, [language]);

  // Alternar entre claro y oscuro
  const toggleLanguage = () => {
    setLanguage(prev => (prev === "en" ? "es" : "en"));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Hook personalizado
export const useLanguage = () => useContext(LanguageContext);