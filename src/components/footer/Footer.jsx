import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Alpesh</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="footer__link">
              Projects
            </a>
          </li>
          <li>
            <a href="#codingprofile" className="footer__link">
              Coding Profile
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://github.com/savaliyaalpesh"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i className="uil uil-github-alt"></i>
          </a>
          <a
            href="mailto:alpeshsavaliya63@gmail.com"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i className="uil uil-envelope"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/alpesh-savaliya-1220bb26b/"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i className="uil uil-linkedin-alt"></i>
          </a>
        </div>
      </div>

      <span className="footer__copy">Copyright © 2022 Alpesh Savaliya </span>
    </footer>
  );
};

export default Footer;
