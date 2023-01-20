import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg" id="navbar">
      <div class="container">
        <a class="navbar-brand" href="#" id="navbar-brand">
        Sayesta Goswami, PhD <br/>
        <span>CLINICAL PSYCHOLOGIST</span>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-end"
          id="navbarCollapse"
        >
          <ul class="navbar-nav">
            <li class="nav-item ">
              <a class="nav-link nav-link-first" href="#">
                home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                about me
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                contact us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
