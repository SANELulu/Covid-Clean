import React from "react";

function Nav() {
  return (
    <div className="fixed-top -5">
      <nav className="navbar navbar-light bg-light ">
        <a className="navbar-brand" href="/">
          LOGO
        </a>

        <a className="navbar-brand" href="/login">
          LOGIN
        </a>
      </nav>
    </div>
  );
}

export default Nav;
