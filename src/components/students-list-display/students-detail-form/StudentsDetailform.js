import React, { useState } from "react";
import "./StudentsDetailform.scss";
import firestore from "./../../../firebase.js";

function StudentsDetailform() {
  //const { items, setitems } = useState([]);
  const [classValue, setclassValue] = useState([]);
  const db = firestore.collection("StudentsDetail");

  const handleSubmit = (e) => {
    e.preventDefault();
    let studentName = document.getElementById("student").value;
    let email = document.getElementById("email").value;
    let regno = document.getElementById("regno").value;
    let classValue = document.getElementById("exampleFormControlSelect1").value;
    let studentErr = document.getElementById("student-err").value;
    db.doc()
      .set({
        studentName: studentName,
        regno: regno,
        email: email,
        class: classValue,
      })
      .then(function () {
        console.log("Data saved");
        console.log(classValue);
      })
      .catch(function (error) {
        console.log(error);
      });
    alert("data saved");
    // window.alert.
    // window.location.reload();
  };

  return (
    <div className="sdf-container">
      <form onSubmit={handleSubmit}>
        <div class="sdf-div-container form-group">
          <label for="student">Student Name</label>
          <br />
          <input type="text" class="form-control" name="student" id="student" />
          <span id="student-err"></span>
        </div>
        <div class="sdf-div-container form-group">
          <label for="regno">Register Number</label>
          <br />
          <input type="text" name="regno" class="form-control" id="regno" />
        </div>
        <div class="sdf-div-container form-group">
          <label for="email">Email</label>
          <br />
          <input type="text" name="email" class="form-control" id="email" />
        </div>
        <div class="sdf-div-container form-group">
          <label for="exampleFormControlSelect1">Class</label>
          <select class="form-control" id="exampleFormControlSelect1">
            <option>Class 1</option>
            <option>Class 2</option>
            <option>Class 3</option>
            <option>Class 4</option>
            <option>Class 5</option>
            <option>Class 6</option>
            <option>Class 7</option>
            <option>Class 8</option>
            <option>Class 9</option>
            <option>Class 10</option>
            <option>Class 11</option>
            <option>Class 12</option>
          </select>
        </div>
        <button type="submit" class="sdf-submit-btn mt-3">
          submit
        </button>
      </form>
    </div>
  );
}

export default StudentsDetailform;
