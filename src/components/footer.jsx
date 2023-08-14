import Button from "./miscellaneous/button";
import { useState } from "react";

export default function Footer({ devData }) {
  const socialMedia = devData.basics;
  return (
    <footer className="footer py-5" id="contactForm">
      <section className="container">
        <div className="row gap-3 justify-content-between">
          <div className="col col-lg-4">
            <div className="text-center text-lg-start d-flex flex-column gap-2">
              <h2 className="heading-xl">Contact</h2>
              <p>
                I would love to hear about your project and how I could help.
                Please fill in the form, and I'll get back to you as soon as
                possible.
              </p>
            </div>
          </div>
          <div className="col col-lg-5">
            <ContactForm />
          </div>
        </div>

        <hr className="border my-5" />

        <div className="row py-1 py-lg-2 gap-4 justify-content-center align-items-center">
          <div className="col-6 col-lg text-center text-lg-start">
            <h3 className="heading-dev">
              elias<span className="brand-color">.</span>ekornås
            </h3>
          </div>
          <div className="col-6 col-lg">
            <ul className="d-flex align-items-center p-0 m-lg-0 justify-content-center justify-content-lg-end gap-5">
              {socialMedia.profiles.map((profile) => (
                <li className="list-style" key={profile.network}>
                  <a href={profile.url}>
                    <img src={profile.icon} alt={profile.network} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </footer>
  );
}

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log(name, email, message);

    if (!name || !email || !message) {
      return;
    }

    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <form onSubmit={handleSubmit} className="d-flex flex-column gap-4">
      <div className="d-flex flex-column gap-3">
        <label>NAME</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>EMAIL</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>MESSAGE</label>
        <textarea
          type="text"
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <div className="text-end">
        <Button>SEND MESSAGE</Button>
      </div>
    </form>
  );
}
