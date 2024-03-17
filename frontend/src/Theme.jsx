// Theme.jsx
import React, { useEffect, createContext, useState } from "react";

const ThemeContext = createContext();

const getTheme = () => {
  const theme = localStorage.getItem("theme");
  if (!theme) {
    localStorage.setItem("theme", "dark-theme");
    localStorage.setItem(
      "gradiant",
      "linear-gradient(43deg, #3b3331 0%, #150a2e 46%, #0e3245 100%)"
    );
    return "dark-theme";
  } else {
    return theme;
  }
};

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(getTheme);
  const [gradiant, setGradient] = useState(
    localStorage.getItem("gradiant") || getTheme()
  );

  function toggleTheme() {
    setTheme((prevTheme) => (prevTheme === "dark-theme" ? "light-theme" : "dark-theme"));
  }

  function toggleGradiant() {
    setGradient((prevGradient) =>
      prevGradient ===
      "linear-gradient(43deg, #3b3331 0%, #150a2e 46%, #0e3245 100%)"
        ? "linear-gradient(20deg, #3b4441 0%, #159a2e 46%, #0e3395 100%)"
        : "linear-gradient(43deg, #3b3331 0%, #150a2e 46%, #0e3245 100%)"
    );
  }

  useEffect(() => {
    localStorage.setItem("theme", theme);
    localStorage.setItem("gradiant", gradiant);
  }, [theme, gradiant]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
        gradiant,
        toggleGradiant,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
