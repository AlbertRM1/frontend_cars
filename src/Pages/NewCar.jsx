import BookCar from "../components/BookCar";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export function NewCar() {
    return (
        <>
        <Navbar />
        <section className="contact-page">
        <br />
        <div className="container">
          <div className="cookies">
            <div>
                <BookCar />
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
    );
}

export default NewCar;