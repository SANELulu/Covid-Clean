import React from "react";
import logo from "../../assets/C.png";
import textLogo from "../../assets/cleanmind-text-50.png";
import "./nav.css";

function Nav() {
  return (
    <div className="fixed-top -5">
      <nav className="navbar navbar-light bg-light ">
        <a href="/">
          {/* <img src={textLogo} id="logo" className="navbar-brand logo"></img> */}
          <img src={logo} id="logo" className="navbar-brand logo"></img>
        </a>
        <a className="navbar-brand" href="/login">
          LOGIN
        </a>
      </nav>
    </div>
  );
}

export default Nav;
