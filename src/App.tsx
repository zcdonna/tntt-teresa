import './App.css'
import { Routes, Route} from "react-router-dom"; // Navigate, useNavigate 
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { ThemeContext } from './contexts/ThemeContext';
import { useEffect, useState } from 'react';
import EventAnnouncement from './pages/Event-Announcement';
import About from './pages/About';
import Resources from './pages/Resources';
import Photos from './pages/Photos';


const App = () => {
  const [theme, setTheme] = useState("light-mode");
  
  const toggleTheme = () => {
    setTheme(theme === "light-mode" ? "dark-mode" : "light-mode");
  };

  useEffect(() => {
    document.body.classList.remove("light-mode", "dark-mode");
    document.body.classList.add(theme);
  }, [theme]);

  // Use to access the website: 
  // const [password, setPassword] = useState("");
  // const [isAuthenticated, setIsAuthenticated] = useState(false);

  // const handleLogin = () => {
  //   if (password === "mypassword123") {
  //     setIsAuthenticated(true);
  //   } else {
  //     alert("Wrong password!");
  //   }
  // };

  // if (!isAuthenticated) {
  //   return (
  //     <div style={{ textAlign: "center", padding: "2rem" }}>
  //       <h2>Enter Password</h2>
  //       <input
  //         type="password"
  //         value={password}
  //         onChange={(e) => setPassword(e.target.value)}
  //       />
  //       <button onClick={handleLogin}>Submit</button>
  //     </div>
  //   );
  // }

  return (
    <div>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<EventAnnouncement />} />
        <Route path="/about" element={<About />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/photos" element={<Photos />} />
      </Routes>
      </ThemeContext.Provider>
    </div>
  )
}

export default App;

