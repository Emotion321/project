import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ReactDOM from "react-dom";
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";
import { Contact } from "./pages/Contact";
import { Navbar } from "./Navbar";
import React, { useState } from "react";

function App() {
  const [username, setUsername] = useState("LysanderBlake");
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/home" element={<Home username={username} />} />
          <Route
            path="/profile"
            element={<Profile username={username} setUsername={setUsername} />}
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
