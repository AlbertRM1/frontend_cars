import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
/* import CarImg1 from "../images/cars-big/audi-box.png"; */

function Models() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    // Realizar una solicitud GET al endpoint /api/cars/allCars del backend
    fetch("http://localhost:8080/api/cars/allCars")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setCars(data))
      .catch((error) => console.error("Error al obtener cars:", error));
  }, []); // El [] vacío asegura que esta solicitud se realice solo una vez al cargar el componente

  return (
    <>
      <Navbar />
      <section className="models-section">
        <br />
        <div className="container">
          <div className="models-div">
            {cars.map((car, index) => (
              <div className="models-div__box" key={index}>
                <div className="models-div__box__img">
                  {/* <img src={CarImg1} alt="car_img" /> */}
                </div>
                <div className="models-div__box__descr">
                  <div className="models-div__box__descr__name-price">
                    <div className="models-div__box__descr__name-price__name">
                      <p>{car.make} {car.model}</p>
                      <span>
                        {Array.from({ length: car.estrellas }).map((_, index) => (
                          <i key={index} className="fa-solid fa-star"></i>
                        ))}
                      </span>
                    </div>
                    <div className="models-div__box__descr__name-price__price">
                      <h4>{car.price} €</h4>
                    </div>
                  </div>
                  <div className="models-div__box__descr__name-price__details">
                    <span>
                      <i className="fa-solid fa-car-side"></i> &nbsp; {car.kms} km
                    </span>
                    <span style={{ textAlign: "right" }}>
                      Year {car.year} &nbsp; <i className="fa-solid fa-calendar"></i>
                    </span>
                    <span>
                      <i className="fa-solid fa-gas-pump"></i> &nbsp; {car.fuel}
                    </span>
                    <span>
                      <i className="fa-solid fa-gas-pump"></i> &nbsp; {car.shift}
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
