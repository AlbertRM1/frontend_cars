import Footer from "../components/Footer";
import PlanTrip from "../components/PlanTrip";
import AboutMain from "../images/about/about-main.jpg";
import Box1 from "../images/about/icon1.png";
import Box2 from "../images/about/icon2.png";
import Box3 from "../images/about/icon3.png";

function About() {
  return (
    <>
      <section className="about-page">
        <br />
        <div className="container">
          <div className="about-main">
            <img
              className="about-main__img"
              src={AboutMain}
              alt="car-renting"
            />
            <div className="about-main__text">
              <h3>About Company</h3>
              <h2>Sell your car easily, quickly and without commitments</h2>
              <p>
              Our company is created to facilitate the purchase 
              and sale of second-hand cars that people no longer 
              need and so that they can be used by someone who does need them.
              </p>
            </div>
          </div>
          <PlanTrip />
        </div>
      </section>
      <Footer />
    </>
  );
}

export default About;
