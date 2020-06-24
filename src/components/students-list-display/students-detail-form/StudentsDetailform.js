import React, { useState } from "react";
import "./StudentsDetailform.scss";
import firestore from "./../../../firebase.js";
import firebase from "firebase";

function validate(name, email, regno, classValue) {
  // we are going to store errors for all fields
  // in a signle array
  const errors = [];
  let studentErr = document.getElementById("student-err");
  let emailErr = document.getElementById("email-err");
  let regnoErr = document.getElementById("regno-err");
  let classErr = document.getElementById("class-err");
  if (name.length === 0) {
    studentErr.innerHTML = "*This field is required";
    errors.push("name");
  }

  /* if (email.length < 5) {
    emailErr.innerHTML = "Email is not valid";
  }*/
  if (
    email.split("").filter((x) => x === "@").length !== 1 ||
    email.indexOf(".") === -1 ||
    email.length < 5
  ) {
    emailErr.innerHTML = "*Email is not valid";
    errors.push("email");
  }

  if (regno.length === 0) {
    regnoErr.innerHTML = "*This field is required";
    errors.push("regno");
  }

  if (classValue === "Select Class") {
    classErr.innerHTML = "*This field is not selected";
    errors.push("class");
  }

  return errors;
}

function StudentsDetailform() {
  //const { items, setitems } = useState([]);
  const [error, seterror] = useState([]);
  const studentdb = firestore.collection("StudentsDetail");
  const logindb = firestore.collection("LoginDetails");

  const handleSubmit = (e) => {
    e.preventDefault();
    let studentName = document.getElementById("student").value;
    let email = document.getElementById("email").value;
    let regno = document.getElementById("regno").value;
    let classValue = document.getElementById("exampleFormControlSelect1").value;
    let password = studentName;
    const errors = validate(studentName, email, regno, classValue);
    if (errors.length > 0) {
      seterror({ errors });
      return;
    }
    firebase.auth().createUserWithEmailAndPassword(email, password);
    studentdb
      .doc()
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
    console.log(logindb);
    logindb.doc().set({
      email: email,
      role: "student",
    });
    alert("data saved");
    // window.alert.
    // window.location.reload();
  };

  return (
    <div className="sdf-container">
      <form onSubmit={handleSubmit}>
        <div class="sdf-div-container form-group">
          <label for="student">Name</label>
          <br />
          <input type="text" class="form-control" name="student" id="student" />
          <p id="student-err" class="text-danger error"></p>
        </div>
        <div class="sdf-div-container form-group">
          <label for="regno">Register Number</label>
          <br />
          <input type="text" name="regno" class="form-control" id="regno" />
          <p id="regno-err" class="text-danger error"></p>
        </div>
        <div class="sdf-div-container form-group">
          <label for="email">Email</label>
          <br />
          <input type="text" name="email" class="form-control" id="email" />
          <p id="email-err" class="text-danger error"></p>
        </div>
        <div class="sdf-div-container form-group">
          <label for="exampleFormControlSelect1">Class</label>
          <select class="form-control" id="exampleFormControlSelect1">
            <option selected>Select Class</option>
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
          <p id="class-err" class="text-danger error"></p>
        </div>
        <button type="submit" class="sdf-submit-btn bg-primary mt-3">
          submit
        </button>
      </form>
    </div>
  );
}

export default StudentsDetailform;
