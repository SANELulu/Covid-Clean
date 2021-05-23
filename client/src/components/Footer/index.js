import React from "react";
import textLogo from "../../assets/cleanmind-text-50.png";
import "./style.css";
import { Fade } from "react-reveal";
function Footer() {
  return (
    <Fade bottom delay={900}>
      <div>
        <footer className="  bg-light">
          <div className="footer-copyright text-center py-3">
            © 2021 Copyright<a> </a>
            <img
              src={textLogo}
              id="footer-logo"
              className="navbar-brand logo"
            ></img>
          </div>
        </footer>
      </div>
    </Fade>
  );
}

export default Footer;
