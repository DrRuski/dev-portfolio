import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import Button from "./miscellaneous/button";
import rings from "../assets/images/pattern-rings.svg";

import { useState } from "react";

export default function Footer({ devData }) {
  const socialMedia = devData.basics;
  return (
    <footer className="footer py-5" id="contactForm">
      <section className="container">
        <div className="row gap-5 justify-content-lg-between">
          <div className="col col-lg-4">
            <div className="text-center text-lg-start d-flex flex-column gap-4 position-relative">
              <h2 className="heading-xl">Contact</h2>
              <p>
                I would love to hear about your project and how I could help.
                Please fill in the form, and I'll get back to you as soon as
                possible.
              </p>
              <img
                src={rings}
                alt={rings}
                className="position-absolute end-50 top-100 z-1 desktopRings"
              />
            </div>
          </div>
          <div className="col col-lg-5">
            <ContactForm />
          </div>
        </div>

        <hr className="border my-5" />

        <div className="row py-lg-2 gap-4 justify-content-center align-items-center">
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

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(name, email, message);

    if (!name || !email || !message) {
      return;
    }

    emailjs
      .sendForm(
        "service_7hpyixo",
        "template_m5jv27d",
        form.current,
        "cvUymwIjUhxtPjW9K"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="d-flex flex-column gap-4">
      <div className="d-flex flex-column gap-4">
        <div className="d-flex flex-column">
          <label htmlFor="name" className="pb-1 label-style">
            NAME
          </label>
          <input
            name="user_name"
            id="name"
            type="text"
            className="input-style"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="d-flex flex-column">
          <label htmlFor="email" className="pb-1 label-style">
            EMAIL
          </label>
          <input
            name="user_email"
            type="email"
            id="email"
            className="input-style"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="d-flex flex-column">
          <label htmlFor="message" className="pb-1 label-style">
            MESSAGE
          </label>
          <textarea
            name="message"
            type="text"
            id="message"
            className="input-style"
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
      </div>
      <div className="text-end">
        <Button>SEND MESSAGE</Button>
      </div>
    </form>
  );
}
