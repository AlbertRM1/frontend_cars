function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footer-content">
            <ul className="footer-content__1">
              <li>
                <span>CAR</span> Buying and Selling
              </li>
              <li>
              We offer a vehicle buying and selling service to facilitate the vehicle process.
              </li>
              <li>
                <i className="copyright">
                ©2023 . All rights reserved.
                </i>
              </li>
            </ul>

            <ul className="footer-content__2">
              <li>Company</li>
              <li>
                <a href="/team">Our Team</a>
              </li>
              <li>
                <a href="/about">About Us</a>
              </li>
              <li>
                <a href="/contact">Contact Us</a>
              </li>
            </ul>

            <ul className="footer-content__2">
              <li>Copyright</li>
              <li>
                <a href="/cookies">Use of Cookies</a>
              </li>
              <li>
                <a href="/privacy">Privacy Policy</a>
              </li>
              <li>
                <a href="/legalwarning">Legal Warning</a>
              </li>
              <li>
                <a href="/conditions">Terms & Conditions</a>
              </li>
            </ul>

            <ul className="footer-content__2">
              <li>Subscription</li>
              <li>
                <p>Subscribe your Email address for latest news & updates.</p>
              </li>
              <li>
                <input type="email" id="emailfooter" className="email" placeholder="Enter Email Address"></input>
              </li>
              <li>
                <button className="submit-email">Submit</button>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;