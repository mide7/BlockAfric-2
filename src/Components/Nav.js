import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../css/Navigation.css";

function Nav({ url, name, icon }) {
  let location = useLocation();
  let active = location.pathname === url ? "active" : null;
  return (
    <Link to={url} className={`navLink ${active}`}>
      <div className="d-flex flex-column align-items-center fs-6 fw-bold p-2">
        <FontAwesomeIcon icon={icon} className='fs-2'/> <span>{name}</span>
      </div>
    </Link>
  );
}

export default Nav;
