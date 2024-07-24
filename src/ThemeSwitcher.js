// src/ThemeSwitcher.js
import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import "./ThemeSwitcher.css"; // Import your custom CSS file

const ThemeSwitcher = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="theme-switcher container">
      <h1 className="mt-4">Theme Switcher Example</h1>
      <br />

      <label className="switch">
        <input type="checkbox" checked={isDarkMode} onChange={toggleTheme} />
        <span className="slider"></span>
      </label>
      <span>{isDarkMode ? "Dark Mode" : "Light Mode"}</span>
    </div>
  );
};

export default ThemeSwitcher;
