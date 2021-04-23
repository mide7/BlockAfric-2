import {
  faBell,
  faCrosshairs,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header d-flex align-items-center justify-content-between pb-2 color-primary">
      <Link to="/" className="text-dark">
        <div className="header-logo">
          <span className="fw-bold fs-3 px-1 border border-dark px-4">LOGO</span>
        </div>
      </Link>
      <div>
        <span className="fs-4 px-2">
          <FontAwesomeIcon icon={faUserCircle} />
        </span>
        <span className="fs-6 ps-2 me-1">
          <FontAwesomeIcon icon={faBell} />
        </span>
      </div>
    </header>
  );
}

export default Header;
