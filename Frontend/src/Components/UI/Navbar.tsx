import React from "react";
import { Link } from "react-router-dom";


interface NavbarProps {
  brandName: string;
  logo: string;
}


export default function Navbar(navbarProps: NavbarProps) {
  return (
    <nav className="navbar navbar-expand bg-white px-2 shadow-sm fixed-top">
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
              <Link to="/" className="navbar-brand d-flex align-items-center">
                <img
                  className="img-fluid me-2"
                  style={{ height: "2em", width: "auto" }}
                  src={navbarProps.logo}
                  alt="logo"
                />
                <h3 className="text-dark fw-bold m-0" aria-current="page">
                  {navbarProps.brandName}
                </h3>
              </Link>
            </li>
          </ul>
        </div>
        <a className="nav-link small text-black"
          href="https://hectormagana.art">
          © 2023 B-Llage
        </a>
      </div>
    </nav>
  );
}
