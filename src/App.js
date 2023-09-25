import "../src/dist/styles.css";
import { useState } from "react";
import About from "./Pages/About";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import Models from "./Pages/Models";
import Team from "./Pages/Team";
import Contact from "./Pages/Contact";
import { Login } from "./Pages/Login";
import { Register } from "./Pages/Register";
import { Cookies } from "./Pages/Cookies";
import { Privacy } from "./Pages/Privacy";
import { LegalWarning } from "./Pages/Legal";
import { Conditions } from "./Pages/Conditions";
import NewCar from "./Pages/NewCar";
import DarkModeButton from "./components/DarkModeButton";

function App() {
    
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

    return (
    <>
      <div className="cont">
        <DarkModeButton darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="/api/cars/allCars" element={<Models />} />
          <Route path="team" element={<Team />} />
          <Route path="contact" element={<Contact />} />
          <Route path="/api/users/allUsers" element={<Login />} />
          <Route path="/api/users/createUser" element={<Register />} />
          <Route path="cookies" element={<Cookies />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="legalwarning" element={<LegalWarning />} />
          <Route path="conditions" element={<Conditions />} />
          <Route path="/api/cars/addCar" element={<NewCar />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
