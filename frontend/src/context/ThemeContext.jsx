import React, { createContext, useContext, useState, useEffect } from "react";

// 1. Create Context
const ThemeContext = createContext();

// 2. Provider component
export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  // Apply theme to body
  useEffect(() => {
    document.body.classList.remove("light-theme", "dark-theme");
    document.body.classList.add(theme === "dark" ? "dark-theme" : "light-theme");
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// 3. Custom hook (this is the `useTheme` you were missing!)
export function useTheme() {
  return useContext(ThemeContext);
}
