import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar( setLoggedIn ) {
  const [nav, setNav] = useState(false);

  const handleLogout = () => {
    // Eliminar el token de autenticación del almacenamiento local
    localStorage.removeItem("authToken");
    setLoggedIn(false);
  
    // Redirigir al usuario a la página de inicio de sesión o cualquier otra página deseada
    window.location.href = "/";
  };

  const openNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <nav>
        {/* mobile */}
        <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
          <div onClick={openNav} className="mobile-navbar__close">
            <i className="fa-solid fa-xmark"></i>
          </div>
          <ul className="mobile-navbar__links">
            <li>
              <Link onClick={openNav} to="/api/cars/allCars">
                Models
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/api/cars/addCar">
                New Car
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/contact">
                Contact
              </Link>
            </li>
            <div className="SignIn">
              <li>
                Welcome
              </li>
            </div>
            <div className="SignIn">
              <li>
                <Link onClick={handleLogout} to="/">
                  Sign Out
                </Link>
              </li>
            </div>
          </ul>
        </div>

        {/* desktop */}
        <div className="navbar">
          <div className="navbar__img" />
          <ul className="navbar__links">
            <li>
              {" "}
              <Link className="models-link" to="/api/cars/allCars">
                Vehicle Models
              </Link>
            </li>
            <li>
              {" "}
              <Link className="contact-link" to="/api/cars/addCar">
                New Car
              </Link>
            </li>
            <li>
              {" "}
              <Link className="contact-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
          <div className="navbar__buttons">
            <p>
              Welcome 
            </p>
            <Link className="navbar__buttons__register" onClick={handleLogout} to="/">
              Sign Out
            </Link>
          </div>

          {/* mobile */}
          <div className="mobile-hamb" onClick={openNav}>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-menu-2"><path d="M4 6l16 0"></path><path d="M4 12l16 0"></path><path d="M4 18l16 0"></path></svg>
            <i className="fa-solid fa-bars"></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
