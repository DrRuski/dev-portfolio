import elias from "../assets/images/elias2.png";
import rings from "../assets/images/pattern-rings.svg";
import circle from "../assets/images/pattern-circle.svg";
import { skillSet } from "./skillAPI/skillAPI";

export default function Main() {
  return (
    <main>
      <IntoSection />
      <hr className="break-line"></hr>
      <SkillList />
      <hr className="break-line"></hr>
    </main>
  );
}

function IntoSection() {
  return (
    <section className="container">
      <div className="row gap-4">
        <div className="col-12 d-flex justify-content-center position-relative">
          <img src={rings} alt="" className="position-absolute end-50 z-1" />

          <div className="img-bg z-2">
            <img src={elias} alt="" className="img-fluid z-3" />
          </div>

          <img
            src={circle}
            alt=""
            className="position-absolute z-1 top-50 start-50"
          />
        </div>
        <div className="text-center">
          <h1 className="heading-xl">
            Nice to meet you! I'm{" "}
            <span className="text-underline-style">Elias Ekornås.</span>
          </h1>
        </div>
        <div className="text-center">
          <p>
            Based in Norway, I am a front-end developer who is passionate about
            building accessible web apps that users love.
          </p>
        </div>
        <div className="col text-center">
          <button className="button">
            <span className="button-border-bottom">CONTACT ME</span>
          </button>
        </div>
      </div>
    </section>
  );
}

function SkillList() {
  return (
    <section className="container">
      <div className="row gap-4 justify-content-lg-center">
        {skillSet.map((skill) => (
          <SkillItem
            key={skill.name}
            name={skill.name}
            experience={skill.experience}
          />
        ))}
      </div>
    </section>
  );
}

function SkillItem({ name, experience }) {
  return (
    <div className="col-12 col-lg-3 text-center text-lg-start">
      <h3>{name}</h3>
      <p>{experience}</p>
    </div>
  );
}
