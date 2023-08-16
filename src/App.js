import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ReactDOM from "react-dom";
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";
import { Contact } from "./pages/Contact";
import { Navbar } from "./Navbar";
import React, { useState, useContext, createContext } from "react";
import { QueryClient } from "@tanstack/react-query";

export const AppContext = createContext();

function App() {
  const [username, setUsername] = useState("LysanderBlake");
  return (
    <div className="App">
      <AppContext.Provider value={{ username, setUsername }}>
        <Router>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<h1>404</h1>} />
          </Routes>
        </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;
