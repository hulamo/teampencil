import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md bg-dark navbar-dark">
      <a className="navbar-brand" href="#">
        TeamPencil
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavbar"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="collapsibleNavbar">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#">
              Folders
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Archivos
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Contactos
            </a>
          </li>
        </ul>
      </div>
      <ul className="nav navbar-nav navbar-right">
        <li className="nav-item">
          <a className="nav-link" href="#">
            Mi Cuneta
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Logout
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
