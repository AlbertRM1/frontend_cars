import { useEffect, useState } from "react";
import CarAudi from "../images/cars-big/audia1.jpg";
import CarGolf from "../images/cars-big/golf6.jpg";
import CarToyota from "../images/cars-big/toyotacamry.jpg";
import CarBmw from "../images/cars-big/bmw320.jpg";
import CarMercedes from "../images/cars-big/benz.jpg";
import CarPassat from "../images/cars-big/passatcc.jpg";

const BookCar = () => {


  return (
    <>
      <section id="booking-section" className="book-section">
        {/* overlay */}

        <div className="container">
          <div className="book-content">
            <div className="book-content__box">
              <h2>New car</h2>

              <p className="booking-done">
                Check your email to confirm an order.{" "}
                <i className="fa-solid fa-xmark"></i>
              </p>

              <form className="box-form">
                <div className="box-form__car-type">
                  <label>
                    <i className="fa-solid fa-car"></i> &nbsp; Select Your Car
                    Type <b>*</b>
                  </label>
                  <select required>
                    <option>Select your car type</option>
                    <option value="Audi A1 S-Line">Audi A1 S-Line</option>
                    <option value="VW Golf 6">VW Golf 6</option>
                    <option value="Toyota Camry">Toyota Camry</option>
                    <option value="BMW 320 ModernLine"> BMW 320 ModernLine </option>
                    <option value="Mercedes-Benz GLK">Mercedes-Benz GLK</option>
                    <option value="VW Passat CC">VW Passat CC</option>
                  </select>
                </div>

                <div className="box-form__car-type">
                  <label>
                    <i className="fa-solid fa-location-dot"></i> &nbsp; Select Your Model Car{" "}
                    <b>*</b>
                  </label>
                  <select required>
                    <option>Select pick up location</option>
                    <option>Belgrade</option>
                    <option>Novi Sad</option>
                    <option>Nis</option>
                    <option>Kragujevac</option>
                    <option>Subotica</option>
                  </select>
                </div>

                <div className="box-form__car-type">
                  <label>
                    <i className="fa-solid fa-location-dot"></i> &nbsp; Exchange Rate{" "}
                    <b>*</b>
                  </label>
                  <select required>
                    <option>Select Exchange Rate</option>
                    <option>Automatic Change</option>
                    <option>Manual Change</option>
                  </select>
                </div>

                <div className="box-form__car-type">
                  <label>
                    <i className="fa-solid fa-location-dot"></i> &nbsp; Fuel Type{" "}
                    <b>*</b>
                  </label>
                  <select required>
                    <option>Select Fuel Type</option>
                    <option>Gasoline</option>
                    <option>Diesel</option>
                    <option>Electric</option>
                  </select>
                </div>

                <div className="box-form__car-type">
                  <label>
                    <i className="fa-solid fa-location-dot"></i> &nbsp; First car registration{" "}
                    <b>*</b>
                  </label>
                  <input type="date" placeholder=" €" className='inputform' required />
                </div>

                <div className="box-form__car-type">
                  <label>
                    <i className="fa-solid fa-location-dot"></i> &nbsp; How Many Doors Does It Have{" "}
                    <b>*</b>
                  </label>
                  <select required>
                    <option>Select Doors Type</option>
                    <option>3 Doors</option>
                    <option>5 Doors</option>
                  </select>
                </div>

                <div className="box-form__car-type">
                  <label>
                    <i className="fa-solid fa-location-dot"></i> &nbsp; How many kilometers does it have?{" "}
                    <b>*</b>
                  </label>
                  <input type="number" placeholder=" In Km" className='inputform' required />
                </div>

                <div className="box-form__car-type">
                  <label>
                    <i className="fa-solid fa-location-dot"></i> &nbsp; Do you have the maintenance booklet (or a digital certificate)?{" "}
                    <b>*</b>
                  </label>
                  <select required>
                    <option>Select your choose</option>
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </div>

                <div className="box-form__car-type">
                  <label>
                    <i className="fa-solid fa-location-dot"></i> &nbsp; What color is the exterior of your car?{" "}
                    <b>*</b>
                  </label>
                  <select required>
                    <option>Select your choose</option>
                    <option>Grey</option>
                    <option>White</option>
                    <option>Black</option>
                    <option>Blue</option>
                    <option>Red</option>
                    <option>Orange</option>
                    <option>Green</option>
                    <option>Pink</option>
                    <option>Purple</option>
                  </select>
                </div>

                <div className="box-form__car-type">
                  <label>
                    <i className="fa-solid fa-location-dot"></i> &nbsp; What is your province?{" "}
                    <b>*</b>
                  </label>
                  <select required>
                    <option>Select your choose</option>
                    <option>A Coruña</option>
                    <option>Álava</option>
                    <option>Albacete</option>
                    <option>Alicante</option>
                  </select>
                </div>
                
                <div className="box-form__car-type">
                  <label>
                    <i className="fa-solid fa-location-dot"></i> &nbsp; Your estimated offer{" "}
                    <b>*</b>
                  </label>
                  <input type="number" placeholder=" €" className='inputform' readOnly />
                </div>
                
                <button type="submit">Estimate</button>

                <div className="box-form__car-type">
                  <label>
                    <i className="fa-solid fa-location-dot"></i> &nbsp; Enter your offer{" "}
                    <b>*</b>
                  </label>
                  <input type="number" placeholder=" €" className='inputform' required />
                </div>
                <button type="submit">Upload</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default BookCar;