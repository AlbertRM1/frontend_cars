import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const NewCar = () => {
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [price, setPrice] = useState("");
  const [fuel, setFuel] = useState("");
  const [year, setYear] = useState("");
  const [kms, setKms] = useState("");
  const [door, setDoor] = useState("");
  const [shift, setShift] = useState("");
  const [color, setColor] = useState("");
  const [is_professional, setIsProfessional] = useState("");
  const [province, setProvince] = useState("");
  const [country, setCountry] = useState("");
  const [bookingDone, setBookingDone] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      make,
      model,
      price,
      fuel,
      year,
      kms,
      door,
      shift,
      color,
      is_professional,
      province,
      country,
    };

    try {
      const response = await fetch("http://localhost:8080/api/cars/addCar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.status === 201) {
        setBookingDone(true);
        // Puedes redirigir al usuario a otra página o mostrar un mensaje de éxito aquí
          window.location.href = "/api/cars/allCars";
      } else {
        // Manejar el caso de error
        console.error("Error en la solicitud:", response.status);
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
    }
  };

  return (
    <>
      <Navbar />
      <section id="booking-section" className="book-section">
        <div className="container">
          <div className="book-content">
            <div className="book-content__box">
              <h2>New car</h2>

              {bookingDone ? (
                <p className="booking-done">
                  Check your email to confirm an order.{" "}
                  <i className="fa-solid fa-xmark"></i>
                </p>
              ) : (
                <form className="box-form" onSubmit={handleSubmit}>
                  <div className="box-form__car-type">
                    <label>
                      <i className="fa-solid fa-car"></i> &nbsp; Select Your Car Type <b>*</b>
                      <br />
                      <select required value={make} onChange={(e) => setMake(e.target.value)} id="selnewcar1" name="sel1">
                        <option>Select your car type</option>
                        <option>Audi</option>
                        <option>Volkswagen</option>
                        <option>Toyota</option>
                        <option>BMW</option>
                        <option>Mercedes</option>
                        <option>Peugeot</option>
                      </select>
                    </label>
                  </div>

                  <div className="box-form__car-type">
                    <label>
                      <i className="fa-solid fa-location-dot"></i> &nbsp; Select Your Model Car <b>*</b>
                      <br />
                      <select required value={model} onChange={(e) => setModel(e.target.value)} id="selnewcar2" name="sel2">
                        <option>Select pick up location</option>
                        <option>A1</option>
                        <option>Benz</option>
                        <option>320</option>
                        <option>Golf 6</option>
                        <option>Passat</option>
                        <option>Camry</option>
                      </select>
                    </label>
                  </div>

                  <div className="box-form__car-type">
                    <label>
                      <i className="fa-solid fa-location-dot"></i> &nbsp; Exchange Rate <b>*</b>
                      <br />
                      <select required value={shift} onChange={(e) => setShift(e.target.value)} id="selnewcar3" name="sel3">
                        <option>Select Exchange Rate</option>
                        <option>Automatic</option>
                        <option>Manual</option>
                      </select>
                    </label>
                  </div>

                  <div className="box-form__car-type">
                    <label>
                      <i className="fa-solid fa-location-dot"></i> &nbsp; Fuel type <b>*</b>
                      <br />
                      <select required value={fuel} onChange={(e) => setFuel(e.target.value)} id="selnewcar4" name="sel4" >
                        <option value="">Select fuel type</option>
                        <option value="Gasoline">Gasoline</option>
                        <option value="Diesel">Diesel</option>
                        <option value="Electric">Electric</option>
                      </select>
                    </label>
                  </div>

                  <div className="box-form__car-type">
                    <label>
                      <i className="fa-solid fa-location-dot"></i> &nbsp; Year of car <b>*</b>
                    <br />
                    <input type="number" placeholder="Year" className="inputform" id="selnewcar5" name="sel5" required value={year} onChange={(e) => setYear(e.target.value)} />
                    </label>
                  </div>

                  <div className="box-form__car-type">
                    <label>
                      <i className="fa-solid fa-location-dot"></i> &nbsp; How Many Doors Does It Have <b>*</b>
                      <br />
                      <select required value={door} onChange={(e) => setDoor(e.target.value)} id="selnewcar6" name="sel6">
                        <option>Select Doors Type</option>
                        <option>3</option>
                        <option>5</option>
                      </select>
                    </label>
                  </div>

                  <div className="box-form__car-type">
                    <label>
                      <i className="fa-solid fa-location-dot"></i> &nbsp; How many kilometers does it have? <b>*</b>
                      <br />
                      <input type="number" placeholder="In Km" className="inputform" id="selnewcar7" name="sel7" required value={kms} onChange={(e) => setKms(e.target.value)} />
                    </label>
                  </div>

                  <div className="box-form__car-type">
                    <label>
                      <i className="fa-solid fa-location-dot"></i> &nbsp; What color is the exterior of your car? <b>*</b>
                      <br />
                      <select required value={color} onChange={(e) => setColor(e.target.value)} id="selnewcar8" name="sel8">
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
                    </label>
                  </div>

                  <div className="box-form__car-type">
                    <label>
                      <i className="fa-solid fa-location-dot"></i> &nbsp; What is your province? <b>*</b>
                      <br />
                      <select required value={province} onChange={(e) => setProvince(e.target.value)} id="selnewcar9" name="sel9">
                        <option>Select your choose</option>
                        <option>A Coruña</option>
                        <option>Álava</option>
                        <option>Albacete</option>
                        <option>Alicante</option>
                      </select>
                    </label>
                  </div>

                  <div className="box-form__car-type">
                    <label>
                      <i className="fa-solid fa-location-dot"></i> &nbsp; What is your country? <b>*</b>
                      <br />
                      <select required value={country} onChange={(e) => setCountry(e.target.value)} id="selnewcar10" name="sel10">
                        <option>Select your choose</option>
                        <option>Spain</option>
                      </select>
                    </label>
                  </div>

                  <div className="box-form__car-type">
                    <label>
                      <i className="fa-solid fa-location-dot"></i> &nbsp; Is professional? <b>*</b>
                      <br />
                      <select required value={is_professional} onChange={(e) => setIsProfessional(e.target.value)} id="selnewcar11" name="sel11">
                        <option>Select your choose</option>
                        <option>true</option>
                        <option>false</option>
                      </select>
                    </label>
                  </div>

                  <button>Estimate</button>

                  <div className="box-form__car-type">
                    <label>
                      <i className="fa-solid fa-location-dot"></i> &nbsp; Your price estimated <b>*</b>
                      <br />
                      <input type="number" placeholder="€" className="inputform" id="selnewcar12" name="sel12" readOnly />
                  </label>
                  </div>

                  <div className="box-form__car-type">
                    <label>
                      <i className="fa-solid fa-location-dot"></i> &nbsp; Enter yor price <b>*</b>
                      <br />
                      <input type="number" placeholder="€" className="inputform" id="selnewcar13" name="sel13" required value={price} onChange={(e) => setPrice(e.target.value)} />
                  </label>
                  </div>

                  <button type="submit">Upload</button>

                </form>
              )}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default NewCar;
