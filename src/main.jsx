import React from "react";
import ReactDOM from "react-dom/client";
import Hero from "./components/Hero"
import Footer from "./components/Footer"
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Hero />
    <div className="container">
      <div className="header">
        <h1>hacen barboucha</h1>
        <h4>Frontend Web Developer</h4>
        <div className="cta">
          <a
            href="https://www.github.com/hacenbarb"
            target="_blank"
            className="btn"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/hacenbarb/"
            target="_blank"
            className="btn"
          >
            LinkedIn
          </a>
        </div>
      </div>
      <div className="infos">
        <div className="infos_content">
          <h3>about</h3>
          <p>
            I am a frontend web developer with a particular interests in making
            things simple and automating daily tasks, I try to keep up with
            security and best practices, and I'm always looking for new things
            to learn.
          </p>
        </div>
        <div className="infos_content">
          <h3>interests</h3>
          <p>
            Food expert, Reader, Internet Fanatic, Bacon buff, Enterpreneur,
            Travel geek, Pop culture ninga, Tea and coffee fanatic
          </p>
        </div>
      </div>
    </div>
    <Footer />
  </>
);
