import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [lightThemeMode, setLightThemeMode] = useState("");

  const storedThemeVal = localStorage.getItem("themeMode");
  useEffect(() => {
    if (storedThemeVal === "dark") {
      setLightThemeMode(false);
    } else {
      setLightThemeMode(true);
    }
  }, []);

  console.log("localstorage theme =", storedThemeVal);

  const value = {
    lightThemeMode,
    setLightThemeMode,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
