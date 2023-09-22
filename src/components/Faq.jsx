import { useState } from "react";

function Faq() {
  const [activeQ, setActiveQ] = useState("q1");

  const openQ = (id) => {
    setActiveQ(activeQ === id ? "" : id);
  };

  const getClassAnswer = (id) => {
    return activeQ === id ? "active-answer" : "";
  };

  const getClassQuestion = (id) => {
    return activeQ === id ? "active-question" : "";
  };

  return (
    <>
      <section className="faq-section">
        <div className="container">
          <div className="faq-content">
            <div className="faq-content__title">
              <h5>FAQ</h5>
              <h2>Frequently Asked Questions</h2>
              <p>
              Frequently asked questions about the car buying and selling process 
              on our website: Answers to Common Concerns and Inquiries.
              </p>
            </div>

            <div className="all-questions">
              <div className="faq-box">
                <div
                  id="q1"
                  onClick={() => openQ("q1")}
                  className={`faq-box__question  ${getClassQuestion("q1")}`}
                >
                  <p>1. What are the necessary documents to buy a car?</p>
                  <i className="fa-solid fa-angle-down"></i>
                </div>
                <div
                  id="q1"
                  onClick={() => openQ("q1")}
                  className={`faq-box__answer ${getClassAnswer("q1")}`}
                >
                  To buy a car, you will need to have the following documents with you: 
                  your valid driver's license, government identification, proof of current 
                  address, and in some cases, proof of income. You should also be prepared 
                  to complete registration and tax payment forms when purchasing the vehicle.
                </div>

              </div>
              <div className="faq-box">
                <div
                  id="q2"
                  onClick={() => openQ("q2")}
                  className={`faq-box__question ${getClassQuestion("q2")}`}
                >
                  <p>2. What guarantees does the purchase of a used car offer?</p>
                  <i className="fa-solid fa-angle-down"></i>
                </div>
                <div
                  id="q2"
                  onClick={() => openQ("q2")}
                  className={`faq-box__answer ${getClassAnswer("q2")}`}
                >
                  Warranties for used cars may vary depending on the seller 
                  and the specific condition of the vehicle. Some sellers may 
                  offer limited warranties that cover certain mechanical 
                  components for a certain period of time. It is important to 
                  review and understand the terms of the warranty before purchasing.
                </div>
                
              </div>
              <div className="faq-box">
                <div
                  id="q3"
                  onClick={() => openQ("q3")}
                  className={`faq-box__question ${getClassQuestion("q3")}`}
                >
                  <p>3. What is the best way to finance the purchase of a car?</p>
                  <i className="fa-solid fa-angle-down"></i>
                </div>
                <div
                  id="q3"
                  onClick={() => openQ("q3")}
                  className={`faq-box__answer ${getClassAnswer("q3")}`}
                >
                  There are several options available to finance the purchase 
                  of a car. The most common include bank loans, financing through 
                  car dealerships, or leasing. Each option has its pros and cons, 
                  so it is advisable to research and compare interest rates, terms 
                  and conditions to make an informed decision.
                </div>

              </div>
              <div className="faq-box">
                <div
                  id="q4"
                  onClick={() => openQ("q4")}
                  className={`faq-box__question ${getClassQuestion("q4")}`}
                >
                  <p>4. How long does the car ownership transfer process take?</p>
                  <i className="fa-solid fa-angle-down"></i>
                </div>
                <div
                  id="q4"
                  onClick={() => openQ("q4")}
                  className={`faq-box__answer ${getClassAnswer("q4")}`}
                >
                  The time to transfer ownership of a car may vary depending on 
                  the country or state you are in. Typically, it can take anywhere 
                  from a few days to several weeks, depending on factors such as 
                  the efficiency of the department of motor vehicles, appointment 
                  availability, and required documentation. It is advisable to 
                  check with the relevant local authority for specific deadlines.
                </div>
              </div>

              <div className="faq-box">
                <div
                  id="q5"
                  onClick={() => openQ("q5")}
                  className={`faq-box__question ${getClassQuestion("q5")}`}
                >
                  <p>5. Do you offer post-purchase maintenance service?</p>
                  <i className="fa-solid fa-angle-down"></i>
                </div>
                <div
                  id="q5"
                  onClick={() => openQ("q5")}
                  className={`faq-box__answer ${getClassAnswer("q5")}`}
                >
                  Some sellers or dealerships may offer after-sale maintenance 
                  services, such as free vehicle inspection after a certain 
                  time, discounts on regular maintenance services, or extended 
                  warranties for parts and labor. Inquire with the seller 
                  before making the purchase to know the options available 
                  and consider them when deciding.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Faq;
