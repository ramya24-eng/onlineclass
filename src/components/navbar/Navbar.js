import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import TeacherDetailform from "./../teacher-detail-form/TeacherDetailform.js";
import "./Navbar.scss";

function Navbar() {
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-primary">
        <Link to="/" className="navbar-brand mx-5">
          Online Classroom
        </Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item  mx-2" id="oc-font-color">
              <Link to="/stafflist" className="nav-link text-white">
                staff list
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link to="/scheduleclass" className="nav-link text-white">
                schedule
              </Link>
            </li>
          </ul>
        </div>
        <svg
          class="bi bi-person-circle mx-2"
          width="1.8em"
          height="1.8em"
          viewBox="0 0 16 16"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z" />
          <path fill-rule="evenodd" d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
          <path
            fill-rule="evenodd"
            d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"
          />
        </svg>
      </nav>
      <Route path="/" />
      <Route exact path="/stafflist">
        <TeacherDetailform />
      </Route>
      <Route path="/scheduleclass" />
    </div>
  );
}

export default Navbar;
