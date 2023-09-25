import SelectCar from "../images/plan/icon1-dark.png";
import Contact from "../images/plan/icon2-dark.png";
import Drive from "../images/plan/icon3-dark.png";

function PlanTrip() {
  return (
    <>
      <section className="plan-section">
        <div className="container">
          <div className="plan-container">
            <div className="plan-container__title">
              <h2>Quick & easy car buying</h2>
            </div>

            <div className="plan-container__boxes">
              <div className="plan-container__boxes__box">
                <img src={SelectCar} alt="icon_img" />
                <h3>Select Car</h3>
                <p>
                  Select the car that you love and that you 
                  would like to drive, giving it a second chance.
                </p>
              </div>

              <div className="plan-container__boxes__box">
                <img src={Contact} alt="icon_img" />
                <h3>Contact the Seller</h3>
                <p>
                  Contact the seller so we can facilitate the paperwork.
                </p>
              </div>

              <div className="plan-container__boxes__box">
                <img src={Drive} alt="icon_img" />
                <h3>Let's Drive</h3>
                <p>
                  Enjoy your new car.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PlanTrip;
