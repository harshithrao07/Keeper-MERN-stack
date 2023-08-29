import Dashboard from "./components/Dashboard";
import { Route, Routes, useLocation } from "react-router-dom"
import Header from "./components/Header";
import Intro from "./components/Intro";
import { useState, useEffect } from "react";
import Footer from "./components/Footer"

const App = () => {
  const [name,setName]  = useState("");
  const location = useLocation();

  useEffect(() => {
    const storedName = localStorage.getItem("name");
    if (storedName) {
      setName(storedName);
    }
  }, []);

  const handleSetName = (newName) => {
    localStorage.setItem("name", newName);
    setName(newName);
  };

  useEffect(() => {
    if (location.pathname === "/") {
      localStorage.removeItem("name");
      setName("");
    }
  }, [location]);

  return(
    <div>
      <Header name={name} />
      <Routes>
        <Route path="/" element={<Intro setName={handleSetName} />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App;