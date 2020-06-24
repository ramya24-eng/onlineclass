import React, { useState } from "react";
import "./TeacherDetailform.scss";
import firestore from "./../../../firebase.js";
import ClassList from "./ClassList.js";
import SubjectList from "./SubjectList.js";
import Select from "react-select";
import firebase from "firebase";

function validate(teacherName, email, subject, classValue) {
  // we are going to store errors for all fields
  // in a signle array
  const errors = [];
  let teacherErr = document.getElementById("teacher-err");
  let emailErr = document.getElementById("email-err");
  let subjectErr = document.getElementById("subject-err");
  let classErr = document.getElementById("class-err");
  if (teacherName.length === 0) {
    teacherErr.innerHTML = "*This field is required";
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

  if (subject.length === 0) {
    subjectErr.innerHTML = "*This field is not selected";
    errors.push("subject");
  }

  if (classValue.length === 0) {
    classErr.innerHTML = "*This field is not selected";
    errors.push("class");
  }

  return errors;
}

const options = [
  { value: "English", label: "English" },
  { value: "Tamil", label: "Tamil" },
  { value: "Maths", label: "Maths" },
  { value: "Science", label: "Science" },
  { value: "Social", label: "Social" },
  { value: "Physics", label: "Physics" },
  { value: "Chemistry", label: "Chemistry" },
  { value: "Botany", label: "Botany" },
  { value: "Zoology", label: "Zoology" },
  { value: "History", label: "History" },
  { value: "Geography", label: "Geography" },
  { value: "Computer science", label: "Computer science" },
  { value: "Economics", label: "Economics" },
  { value: "Accountancy", label: "Accountancy" },
  { value: "Commerce", label: "Commerce" },
];

const style = {
  control: (base) => ({
    ...base,
    //border: "1px solid #7b1fa2",
    // This line disable the blue border
    boxShadow: "rgb(123,31,162,0.4)",
  }),
};

function ScheduleClass() {
  const [subject, setsubject] = useState([]);
  const [classValue, setclassValue] = useState([]);
  const [error, seterror] = useState([]);
  const teacherdb = firestore.collection("teacherDetail");
  const logindb = firestore.collection("LoginDetails");

  const handleSubmit = (e) => {
    e.preventDefault();
    let teacherName = document.getElementById("teacher").value;
    let email = document.getElementById("email").value;
    //let subject = document.getElementById("exampleFormControlSelect1").value;
    let password = teacherName;
    const errors = validate(teacherName, email, subject, classValue);
    if (errors.length > 0) {
      seterror({ errors });
      return;
    }

    console.log(
      firebase.auth().createUserWithEmailAndPassword(email, password)
    );
    teacherdb
      .doc()
      .set({
        teacherName: teacherName,
        email: email,
        class: classValue,
        subject: subject,
      })
      .then(function () {
        console.log("Data saved");
        console.log(subject);
      })
      .catch(function (error) {
        console.log(error);
      });
    alert("data saved");

    logindb.doc().set({
      email: email,
      role: "teacher",
    });
    //window.alert.
    //window.location.refresh();
  };

  //const classEl = document.getElementById("class");

  const handleonChange = (event) => {
    event.preventDefault();
    let e = event.target;
    //let classValue = setclassvalue(e.value);
    if (!e.classList.contains("tdf-btn-color")) {
      e.classList.add("tdf-btn-color");
      // let classval = e.value;
      setclassValue([...classValue, e.value]);
    } else {
      e.classList.remove("tdf-btn-color");
      setclassValue(classValue.filter((item) => item != e.value));
    }
    console.log(classValue);
  };

  const addSubjectlist = (event) => {
    console.log(event);
    let sublist = event.map((item) => item.value);
    setsubject(sublist);
    console.log(subject);
  };

  return (
    <div className="tdf-container">
      <form onSubmit={handleSubmit}>
        <div class="tdf-div-container form-group">
          <label for="teacher">Name</label>
          <br />
          <input type="text" class="form-control" name="teacher" id="teacher" />
          <p id="teacher-err" class="text-danger error"></p>
        </div>
        <div class="tdf-div-container">
          <label for="email">Email</label>
          <br />
          <input type="text" name="email" class="form-control" id="email" />
          <p id="email-err" class="text-danger error"></p>
        </div>
        <div class="tdf-div-container">
          <label for="class" class="my-3">
            Class
          </label>
          <ClassList handleonChange={handleonChange} />
          <p id="class-err" class="text-danger error"></p>
        </div>
        <div class="tdf-div-container">
          <label for="class" class="my-3">
            Subject
          </label>
          <Select
            isMulti
            placeholder="Select Subject"
            options={options}
            className="basic-multi-select"
            classNamePrefix="select"
            styles={style}
            theme={(theme) => ({
              ...theme,

              colors: {
                ...theme.colors,
                primary25: "#7b1fa2",
                primary: "#7b1fa2",
              },
            })}
            onChange={addSubjectlist}
          />
          <p id="subject-err" class="text-danger error"></p>
        </div>
        <button type="submit" class="tdf-submit-btn bg-primary mt-3">
          submit
        </button>
      </form>
    </div>
  );
}

export default ScheduleClass;
