import githubLogo from "../assets/images/icon-github.svg";
import linkedIn from "../assets/images/icon-linkedin.svg";
import twitter from "../assets/images/icon-twitter.svg";

export default function Header() {
  return (
    <header className="flex justify-center">
      <div className="flex align-center justify-between width">
        <h3 className="heading-dev">elias / ekornås</h3>
        <ul className="flex gap-30">
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
    </header>
  );
}
