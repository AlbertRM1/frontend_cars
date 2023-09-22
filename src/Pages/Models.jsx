import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import CarImg1 from "../images/cars-big/audi-box.png";

function Models() {
  const [ofertas, setOfertas] = useState([]);

  useEffect(() => {
    // Realizar una solicitud GET al endpoint /ofertas del backend
    fetch("http://localhost:5000/ofertas")
      .then((response) => response.json())
      .then((data) => setOfertas(data))
      .catch((error) => console.error("Error al obtener ofertas:", error));
  }, []); // El [] vacío asegura que esta solicitud se realice solo una vez al cargar el componente

  return (
    <>
      <Navbar />
      <section className="models-section">
        <br />
        <div className="container">
          <div className="models-div">
            {ofertas.map((oferta) => (
              <div className="models-div__box" key={oferta.id}>
                <div className="models-div__box__img">
                  <img src={CarImg1} alt="car_img" />
                </div>
                <div className="models-div__box__descr">
                  <div className="models-div__box__descr__name-price">
                    <div className="models-div__box__descr__name-price__name">
                      <p>Audi A1</p>
                      <span>
                        {Array.from({ length: oferta.estrellas }).map((_, index) => (
                          <i key={index} className="fa-solid fa-star"></i>
                        ))}
                      </span>
                    </div>
                    <div className="models-div__box__descr__name-price__price">
                      <h4>${oferta.precio}</h4>
                      <p>per day</p>
                    </div>
                  </div>
                  <div className="models-div__box__descr__name-price__details">
                    <span>
                      <i className="fa-solid fa-car-side"></i> &nbsp; {oferta.salida} Salida
                    </span>
                    <span style={{ textAlign: "right" }}>
                      {oferta.llegada} Llegada &nbsp; <i className="fa-solid fa-car-side"></i>
                    </span>
                    <span>
                      <i className="fa-solid fa-car-side"></i> &nbsp; {oferta.cupo} Personas
                    </span>
                    <span style={{ textAlign: "right" }}>
                      {oferta.combustible} &nbsp; <i className="fa-solid fa-car-side"></i>
                    </span>
                  </div>
                  <div className="models-div__box__descr__name-price__btn">
                    <Link onClick={() => window.scrollTo(0, 0)} to="/">
                      Book Ride
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Models;
