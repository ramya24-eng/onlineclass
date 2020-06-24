import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import TeacherDetailform from "./../staff-list-display/teacher-detail-form/TeacherDetailform.js";
import ScheduleClass from "./../schedule-class/ScheduleClass.js";
import "./Navbar.scss";
import StudentsDetailform from "./../students-list-display/students-detail-form/StudentsDetailform.js";
import HomePage from "./../home-page/HomePage.js";
import StaffListdisplay from "./../staff-list-display/StaffListdisplay.js";
import ClassroomList from "./../classroom-list/ClassroomList.js";
import ClassroomListdetails from "./../classroom-list/ClassroomListdetails.js";
import StudentsListdisplay from "./../students-list-display/StudentsListdisplay.js";

function Navbar() {
  return (
    <div className="mx-3">
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-primary">
        <Link to="/" className="navbar-brand mx-3">
          ONLINE CLASSROOM
        </Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item  mx-2" id="oc-font-color">
              <Link to="/staff-list-display" className="nav-link text-white">
                TUTOR
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link to="/scheduleclass" className="nav-link text-white">
                SCHEDULE
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link to="/students-list-display" className="nav-link text-white">
                STUDENTS
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link to="/classroom" className="nav-link text-white">
                CLASSROOM
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
      <Route path="/"></Route>
      <Route exact path="/staff-list-display">
        <StaffListdisplay />
      </Route>
      <Route exact path="/scheduleclass">
        <ScheduleClass />
      </Route>
      <Route exact path="/students-list-display">
        <StudentsListdisplay />
      </Route>
      <Route exact path="/classroom">
        <HomePage />
      </Route>
      <Route exact path="/classroom-list">
        <ClassroomList />
      </Route>
      {/*<Route
        exact
        path="/details"
        render={(props) => <ClassroomListdetails {...props} />}
      />*/}
    </div>
  );
}

export default Navbar;
