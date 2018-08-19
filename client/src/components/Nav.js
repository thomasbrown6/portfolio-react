import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";


const Nav = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
    <a className="navbar-brand js-scroll-trigger" href="#page-top">
      <span className="d-block d-lg-none">Thomas Brown</span>
      <span className="d-none d-lg-block">
          <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src={require("../images/Profilepic.JPG")} alt="profile pic" /> 
        </span>
    </a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/"
              className={
                window.location.pathname === "/"
                  ? "nav-link js-scroll-trigger"
                  : "nav-link js-scroll-trigger"
              }
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/projects"
              className={
                window.location.pathname === "/projects"
                  ? "nav-link js-scroll-trigger"
                  : "nav-link js-scroll-trigger"
              }
            >
              Projects
            </Link>
          </li>
        </ul>
      </div>
  </nav>
);

export default Nav;
