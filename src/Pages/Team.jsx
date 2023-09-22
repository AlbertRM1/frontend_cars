import Footer from "../components/Footer";
import Person1 from "../images/team/1.png";
import Person2 from "../images/team/2.png";
import Person3 from "../images/team/3.png";
import Person4 from "../images/team/4.png";

function Team() {
  const teamPpl = [
    { img: Person1, name: "Albert Romero", job: "Frontend", linkedin: "https://www.linkedin.com/in/albert-romero-martinez-arm/" },
    { img: Person2, name: "Rahul", job: "Backend", linkedin: "https://www.linkedin.com/in/wallstballer/" },
    { img: Person3, name: "Pavel Hernández", job: "Backend", linkedin: "https://www.linkedin.com/in/pvlhp/" },
    { img: Person4, name: "Ousmane Dagnogo", job: "Data Scientist", linkedin: "https://www.linkedin.com/in/ousmane-dagnogo/" },
  ];
  return (
    <>
      <section className="team-page">
        <div className="cotnainer">
          <div className="contact-div">
            <div className="contact-div__text">
            <h2>Who are we?</h2>
                <p className="ourteam">
                We are a group of men who have created this website 
                as the final project of a bootcamp to teach everything 
                we have learned in this bootcamp journey.
                </p>
            </div>
            
            <div className="team-container">
              {teamPpl.map((ppl, id) => (
                <div key={id} className="team-container__box">
                  <div className="team-container__box__img-div">
                    <img src={ppl.img} alt="team_img" />
                  </div>
                  <div className="team-container__box__descr">
                    <a href={ppl.linkedin} target="_blank" className="linkedin">{ppl.name}</a>
                    <p>{ppl.job}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default Team;
