import Hero from "../components/Hero";
import PlanTrip from "../components/PlanTrip";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import Banner from "../components/Banner";

function Home() {
  
  return (
    <>
      <Hero />
      <br />
      <Banner />
      <PlanTrip />
      <Faq />
      <Footer />
    </>
  );
}

export default Home;