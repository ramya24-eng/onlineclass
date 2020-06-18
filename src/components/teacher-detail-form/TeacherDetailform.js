import React, { useState } from "react";
import "./TeacherDetailform.scss";
import firestore from "./../../firebase.js";
import ClassList from "./ClassList.js";
import SubjectList from "./SubjectList.js";
import Select from "react-select";

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

function ScheduleClass() {
  const [subject, setsubject] = useState([]);
  const [classValue, setclassValue] = useState([]);
  const db = firestore.collection("teacherDetail");

  const handleSubmit = (e) => {
    e.preventDefault();
    let teacherName = document.getElementById("teacher").value;
    let email = document.getElementById("email").value;
    //let subject = document.getElementById("exampleFormControlSelect1").value;
    db.doc()
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
    // window.alert.
    // window.location.reload();
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
      <h3 className="mx-5 tdf-header">TEACHERS LIST</h3>
      <form onSubmit={handleSubmit}>
        <div class="tdf-div-container form-group">
          <label for="teacher">Teachers Name</label>
          <br />
          <input type="text" class="form-control" name="teacher" id="teacher" />
        </div>
        <div class="tdf-div-container">
          <label for="email">Email</label>
          <br />
          <input type="text" name="email" class="form-control" id="email" />
        </div>
        <div class="tdf-div-container">
          <label for="class" class="my-3">
            Class
          </label>
          <ClassList handleonChange={handleonChange} />
        </div>
        <div class="tdf-div-container">
          <label for="class" class="my-3">
            Subject
          </label>
          <Select
            isMulti
            options={options}
            className="basic-multi-select"
            classNamePrefix="select"
            onChange={addSubjectlist}
          />
        </div>
        <button type="submit" class="tdf-submit-btn mt-3">
          submit
        </button>
      </form>
    </div>
  );
}

export default ScheduleClass;
