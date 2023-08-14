import rings from "../../assets/images/pattern-rings.svg";
import circle from "../../assets/images/pattern-circle.svg";
import Anchor from "../miscellaneous/anchor";

export default function IntroSection({ dev }) {
  return (
    <section className="container">
      <div className="row flex-column flex-lg-row-reverse gap-4">
        <div className="col col-lg-4 d-flex justify-content-center position-relative">
          <img src={rings} alt="" className="position-absolute end-50 z-1" />

          <div className="img-bg z-2">
            <img src={dev.image} alt="" className="img-fluid z-3" />
          </div>

          <img
            src={circle}
            alt=""
            className="position-absolute z-1 top-50 start-50"
          />
        </div>

        <div className="d-flex flex-column gap-4 gap-lg-5 col">
          <div className="text-center text-lg-start">
            <h1 className="heading-xl">
              Nice to meet you! I'm{" "}
              <span className="text-underline-style">{dev.name}.</span>
            </h1>
          </div>
          <div className="text-center text-lg-start col-lg-6">
            <p>
              Based in Norway, I am a front-end developer who is passionate
              about building accessible web apps that users love.
            </p>
          </div>
          <div className="col text-center text-lg-start">
            <Anchor link="#contactForm">CONTACT ME</Anchor>
          </div>
        </div>
      </div>
    </section>
  );
}
