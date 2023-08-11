import githubLogo from "../assets/images/icon-github.svg";
import linkedIn from "../assets/images/icon-linkedin.svg";
import twitter from "../assets/images/icon-twitter.svg";

export default function Header() {
  return (
    <header>
      <SocialMedia />
    </header>
  );
}

function SocialMedia() {
  return (
    <div className="container">
      <div className="row py-3 gap-4">
        <div className="col-sm-8 text-center">
          <h3 className="heading-dev">
            elias<span className="brand-color">.</span>ekornås
          </h3>
        </div>

        <div className="col-sm-4">
          <ul className="d-flex align-items-center p-0 justify-content-center gap-5">
            <li className="list-style">
              <a href="https://github.com/DrRuski">
                <img src={githubLogo} alt="Git Hub Logo" />
              </a>
            </li>
            <li className="list-style">
              <a href="https://www.linkedin.com/in/elias-ekorn%C3%A5s/">
                <img src={linkedIn} alt="LinkedIn Logo" />
              </a>
            </li>
            <li className="list-style">
              <a href="https://twitter.com/IMEkon">
                <img src={twitter} alt="Twitter Logo" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
