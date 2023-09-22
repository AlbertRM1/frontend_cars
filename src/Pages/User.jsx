import React from "react";
import Footer from "../components/Footer";

export function User() {
  return (
    <>
      <section className="contact-page">
        <div className="container">
          <div className="contact-div">
            <div className="contact-div__form">
              <form>
                <h2 className='title'>User</h2>
                    <label>Email:</label>
                    <input type="text" placeholder="Email" className="inputform" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <label>Password:</label>
                    <input type="password" placeholder="Password" className="inputform" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <a className="preg">Haven't registered yet?</a>
                    <a href="/register" className="preg">Register</a><br />
                    <button onClick={handleLogin} className="ButtonSub">Sign In</button>
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
};
