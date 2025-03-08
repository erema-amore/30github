import React, { createContext, useContext, useState } from "react";
import Pagination from "./components/Pagination";

const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(false);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme: () => setIsDark(!isDark) }}>
      {children}
    </ThemeContext.Provider>
  );
}

function ThemeToggler() {
  const { isDark, toggleTheme } = useContext(ThemeContext);
  return (
    <button onClick={toggleTheme}>
      Switch to {isDark ? "Light" : "Dark"} Theme
    </button>
  );
}

function App() {
  return (
    <ThemeProvider>
      <ThemeToggler />
      <Pagination/>
    </ThemeProvider>
  );
}

export default App;
