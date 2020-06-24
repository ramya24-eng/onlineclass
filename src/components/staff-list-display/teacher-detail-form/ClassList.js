import React from "react";
import "./TeacherDetailform.scss";
import firestore from "./../../../firebase.js";

function ClassList(props) {
  //const db = firestore.collection("teacherDetail");
  //const classEl = document.getElementById("class");
  let standard = [
    "Class 1",
    "Class 2",
    "Class 3",
    "Class 4",
    "Class 5",
    "Class 6",
    "Class 7",
    "Class 8",
    "Class 9",
    "Class 10",
    "Class 11",
    "Class 12",
  ];
  // console.log("classEl");

  let listItems = standard.map((item) => (
    <li>
      <button
        class={
          item == "Class 10" || item == "Class 11" || item == "Class 12"
            ? "btn cl-btn-color my-1 cl-padding"
            : "btn cl-btn-color my-1"
        }
        value={item}
        onClick={props.handleonChange}
      >
        {item}
      </button>
    </li>
  ));

  return <ul id="class">{listItems}</ul>;
}

export default ClassList;
