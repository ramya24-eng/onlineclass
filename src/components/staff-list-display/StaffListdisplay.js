import React, { useState, Component } from "react";
import firestore from "./../../firebase.js";
import { Link, Route } from "react-router-dom";
//import { findRenderedComponentWithType } from "react-dom/test-utils";

const database = firestore.collection("teacherDetail");

function StaffListdisplay() {
  const [staffdetail, setstaffdetail] = useState([]);

  const listdetails = database.get().then((snapshot) => {
    snapshot.docs.forEach((doc) => {
      let classes = doc.data();
      return (
        <li>
          {classes.teacherName} {classes.email} {classes.class}
          {classes.subject}
        </li>
      );
    });
  });

  console.log(listdetails);
  return (
    <div>
      <h1>Teachers list</h1>
      <p>TeacherName - EmailID - Classes - Subjects</p>
      <ul>{listdetails}</ul>
    </div>
  );
}

export default StaffListdisplay;
