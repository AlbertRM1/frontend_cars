import Footer from "../components/Footer";

function Contact() {



  return (
    <>
      <section className="contact-page">
        <br />
        <div className="container">
          <div className="contact-div">
            <div className="contact-div__text">
              <h2>Create your free account on our website</h2>
              <p>
              With your account you can manage your activity 
              whenever and wherever you want. This way you can 
              control your appraisals, purchases and sales at 
              any time without problems.
              </p>
              <p>
              Save, manage and receive your latest searches 
              in your email and on your smartphone.
              </p>
              <p>
              It's an easy way to manage your appraisals and offers.
              </p>
              <p className="copyright">By registering you accept our <a href="/conditions">terms and conditions</a> as well as our <a href="/privacy">privacy policy</a>.</p>
            </div>
            <div className="contact-div__form">
              <form>
                <label>
                  Full Name <b>*</b>
                </label>
                <input type="text" placeholder='E.g: "Joe Shmoe"'></input>

                <label>
                  Email <b>*</b>
                </label>
                <input type="email" placeholder="youremail@example.com"></input>

                <label>
                  Tell us about it <b>*</b>
                </label>
                <textarea placeholder="Write Here.."></textarea>

                <button type="submit">
                  <i className="fa-solid fa-envelope-open-text"></i>&nbsp; Send
                  Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default Contact;
