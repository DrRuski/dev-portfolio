import rings from "../../assets/images/pattern-rings.svg";
import circle from "../../assets/images/pattern-circle.svg";
import elias from "../../assets/images/elias2.png";

export default function IntroSection() {
  return (
    <section className="container">
      <div className="row gap-5">
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
          <button className="button button-border-bottom">CONTACT ME</button>
        </div>
      </div>
    </section>
  );
}
