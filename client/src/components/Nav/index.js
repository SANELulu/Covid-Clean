import React from "react";
import logo from "../../assets/C.png";
import { Fade } from "react-reveal";
import textLogo from "../../assets/cleanmind-text-50.png";
import "./nav.css";

function Nav() {
  return (
    <Fade top delay={900}>
      <div className="fixed-top -5">
        <nav className="navbar navbar-light bg-light ">
          <a href="/">
            {/* <img src={textLogo} id="logo" className="navbar-brand logo"></img> */}
            <img src={logo} id="logo" className="navbar-brand logo"></img>
          </a>
          <a className="navbar-brand" href="/login">
            SIGNIN
          </a>
        </nav>
      </div>
    </Fade>
  );
}

export default Nav;
