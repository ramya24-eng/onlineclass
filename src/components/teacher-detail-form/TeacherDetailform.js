import React, { useState } from "react";
import "./TeacherDetailform.scss";
import firestore from "./../../firebase.js";
import ClassList from "./ClassList.js";

function ScheduleClass() {
  //const { items, setitems } = useState([]);
  const [classValue, setclassValue] = useState([]);
  const db = firestore.collection("teacherDetail");

  const handleSubmit = (e) => {
    // e.preventDefault();
    let teacherName = document.getElementById("teacher").value;
    let email = document.getElementById("email").value;
    let subject = document.getElementById("exampleFormControlSelect1").value;
    db.doc()
      .set({
        teacherName: teacherName,
        email: email,
        class: classValue,
        subject: subject,
      })
      .then(function () {
        console.log("Data saved");
        console.log(classValue);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  //const classEl = document.getElementById("class");

  const handleonChange = (event) => {
    event.preventDefault();
    let e = event.target;
    //let classValue = setclassvalue(e.value);
    if (!e.classList.contains("oc-btn-color")) {
      e.classList.add("oc-btn-color");
      // let classval = e.value;
      setclassValue([...classValue, e.value]);
    } else {
      e.classList.remove("oc-btn-color");
      setclassValue(classValue.filter((item) => item != e.value));
    }
    console.log(classValue);
  };

  return (
    <div className="oc-container">
      <h3 className="mx-5 oc-header">TEACHERS LIST</h3>
      <form onSubmit={handleSubmit}>
        <div class="oc-div-container form-group">
          <label for="teacher">Teachers Name</label>
          <br />
          <input type="text" class="form-control" name="teacher" id="teacher" />
        </div>

        <div class="oc-div-container">
          <label for="email">Email</label>
          <br />
          <input type="text" name="email" class="form-control" id="email" />
        </div>
        <div class="oc-div-container">
          <label for="class" class="my-3">
            Class
          </label>
          <ClassList handleonChange={handleonChange} />
        </div>
        <div class="oc-div-container">
          <label for="exampleFormControlSelect1">Subject</label>
          <select class="form-control" id="exampleFormControlSelect1">
            <option>English</option>
            <option>Tamil</option>
            <option>Maths</option>
            <option>Science</option>
            <option>Social</option>
            <option>Physics</option>
            <option>Chemistry</option>
            <option>Botany</option>
            <option>Zoology</option>
            <option>Economics</option>
            <option>Geography</option>
            <option>others</option>
          </select>
        </div>
        <button type="submit" class="oc-submit-btn mt-3">
          submit
        </button>
      </form>
    </div>
  );
}

export default ScheduleClass;
