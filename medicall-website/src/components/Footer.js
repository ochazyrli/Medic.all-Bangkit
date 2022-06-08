import React from "react";
import "./css/Footer.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo">
            <Link to="/" className="social-logo">
              <img src="/images/smalllogo.png" alt="" />
              &nbsp;&nbsp;Medic.All
            </Link>
          </div>
          <small class="website-rights">Medic.All © 2022</small>
          <div class="social-icons">
            <Link class="social-icon-link Github" to="/" target="_blank" aria-label="Github">
              <i class="fa-brands fa-github" />
            </Link>
            <Link class="social-icon-link Email" to="/" target="_blank" aria-label="Email">
              <i class="fa-solid fa-at" />
            </Link>
            <Link class="social-icon-link Phone" to="/" target="_blank" aria-label="Phone">
              <i class="fa-solid fa-phone" />
            </Link>
            <Link class="social-icon-link Location" to="/" target="_blank" aria-label="Location">
              <i class="fa-solid fa-location-dot" />
            </Link>
            <Link class="social-icon-link Instagram" to="/" target="_blank" aria-label="Instagram">
              <i class="fa-brands fa-instagram" />
            </Link>
            <Link class="social-icon-link twitter" to="/" target="_blank" aria-label="LinkedIn">
              <i class="fab fa-linkedin" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
