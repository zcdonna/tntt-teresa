import './App.css'
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { ThemeContext } from './contexts/ThemeContext';
import { useEffect, useState } from 'react';


const App = () => {
  const [theme, setTheme] = useState("light-mode");
  
  const toggleTheme = () => {
    setTheme(theme === "light-mode" ? "dark-mode" : "light-mode");
  };

  useEffect(() => {
    document.body.classList.remove("light-mode", "dark-mode");
    document.body.classList.add(theme);
  }, [theme]);

  return (
    <div>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      </ThemeContext.Provider>
    </div>
  )
}

export default App;

