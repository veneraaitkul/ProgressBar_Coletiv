import React from "react";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";

export default function Navbar() {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="nav-inner-wrap">
        <div className="navbar-brand">
          <a
            className="navbar-item is-paddingless"
            href="https://coletiv.com/about-us"
          >
            <Logo />
          </a>

          <a
            role="button"
            className="navbar-burger burger is-pulled-right"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasic"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasic" className="navbar-menu">
          <div className="navbar-end">
            <a className="navbar-item " href="#">
              showcase
            </a>

            <a className="navbar-item" href="#">
              services
            </a>

            <a className="navbar-item" href="#">
              blog
            </a>

            <a
              className="navbar-item  is-active"
              href="#"
              style={{ paddingRight: "2rem" }}
            >
              about us
            </a>
            <div
              className="navbar-item is-paddingless"
              style={{ marginLeft: "1.3rem" }}
            >
              <a className="button is-info" href="#">
                talk to us
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
