/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";
import { translations } from "../data/translations";

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("fr");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "fr" ? "en" : "fr"));
  };

  const t = (key) => {
    if (!key) return "";
    if (typeof key === "object") {
      return key[language] || key["fr"] || "";
    }
    // Simple sanitization for potential string spacing/newline differences
    const lookupKey = typeof key === "string" ? key.trim() : key;
    if (language === "fr") {
      return translations["fr"]?.[lookupKey] || lookupKey;
    }
    return translations[language]?.[lookupKey] || lookupKey;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
