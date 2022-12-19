import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark fixed-bottom">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="navbar-brand d-flex">
                <img
                  className="img-fluid me-2"
                  style={{ height: "1.5em", width: "auto" }}
                  src={`${process.env.PUBLIC_URL}/images/Covered.png`}
                  alt="logo"
                />
                <h3 className="text-white m-0" aria-current="page">
                  Covered
                </h3>
              </Link>
            </li>
          </ul>
        </div>
        <small><span className="badge bg-info fs-6">Alpha</span></small>
        <a
          className="nav-link text-white small"
          aria-current="page"
          href="https://hectormagana.art"
        >
          © 2022 B-Llage
        </a>
      </div>
    </nav>
  );
}
