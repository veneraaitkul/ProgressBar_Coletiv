import React from "react";
import "./Footer.scss";

import { ReactComponent as Logo } from "../../assets/images/logo2.svg";
import { ReactComponent as LinkedinLogo } from "../../assets/images/linkedin.svg";
import { ReactComponent as TwitterLogo } from "../../assets/images/twitter.svg";
import { ReactComponent as InstagramLogo } from "../../assets/images/instagram.svg";

export default function Footer() {
  return (
    <footer className="footer has-background-black">
      <div className="content has-text-centered has-text-info">
        <div className="hero is-primary human-section">
          <p className="has-text-white is-size-5-mobile">
            Your full-service digital agency
          </p>
          <div className="human-info">
            <div>
              <p className="has-text-weight-bold has-text-white is-size-6-mobile ">
                Contacts
              </p>
              <a
                target="_self"
                href="mailto:humans@coletiv.com"
                rel="noopener noreferrer"
                className="is-size-6-mobile"
              >
                humans@coletiv.com
              </a>
              <a
                target="_self"
                href="tel:+351914541645"
                rel="noopener noreferrer"
                className="is-size-6-mobile"
              >
                +351 914 541 645
              </a>
            </div>
          </div>
        </div>
        <div className="company-section">
          <Logo />
          <p className="has-text-grey is-size-6-mobile">@ 2020 Coletiv </p>{" "}
          <a className="has-text-grey is-size-6-mobile">Privacy &amp; Policy</a>
        </div>
        <nav
          className="navigation-section"
          role="navigation"
          aria-label="main navigation"
        >
          <div>
            <p className="section-title">Company</p>
            <p>Showcase</p>
            <p>Services</p>
            <p>Blog</p>
            <p>About Us</p>
          </div>
          <div>
            <p className="section-title">Network</p>
            <p>Coletiv</p>
            <p>Adamant</p>
            <p>Significa</p>
          </div>
          <div>
            <p className="section-title">Contacts</p>
            <p>Email humans@coletiv.com</p>
            <p>Phone +351 914 541 645</p>
          </div>
        </nav>
        <div className="social-section">
          <p className="has-text-grey section-title">social</p>
          <nav className="" role="navigation" aria-label="main navigation">
            <a
              href="https://linkedin.com/company/coletiv"
              title="See Coletiv on LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <LinkedinLogo />
            </a>
            <a
              href="https://twitter.com/coletivstudio"
              title="See Coletiv on LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <TwitterLogo />
            </a>
            <a
              href="https://instagram.com/coletiv"
              title="See Coletiv on LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <InstagramLogo />
            </a>
          </nav>
        </div>
        <div className="footer-cr-section">
          <a className="has-text-grey is-size-7 is-marginless">
            Copyright © Coletiv Studio, Lda. 2020 All rights reserved. If you
            are bored and want to read some legal bits, see our legal page.
          </a>
        </div>
      </div>
    </footer>
  );
}
