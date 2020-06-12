import React from "react";
import "./TeacherDetailform.scss";
import firestore from "./../../firebase.js";

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
        class="btn btn-outline-primary my-1"
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

/*<li className="oc-button">
              <button class="btn btn-outline-primary my-1">Class 1</button>
            </li>
            <li>
              <button class="btn btn-outline-primary my-1">Class 2</button>
            </li>
            <li>
              <button class="btn btn-outline-primary my-1">Class 3</button>
            </li>
            <li>
              <button class="btn btn-outline-primary my-1">Class 4</button>
            </li>
            <li>
              <button class="btn btn-outline-primary my-1">Class 5</button>
            </li>
            <li>
              <button class="btn btn-outline-primary my-1">Class 6</button>
            </li>
            <li>
              <button class="btn btn-outline-primary my-1">Class 7</button>
            </li>
            <li>
              <button class="btn btn-outline-primary my-1">Class 8</button>
            </li>
            <li>
              <button class="btn btn-outline-primary my-1">Class 9</button>
            </li>
            <li>
              <button class="btn btn-outline-primary my-1">Class 10</button>
            </li>
            <li>
              <button class="btn btn-outline-primary my-1">Class 11</button>
            </li>
            <li>
              <button class="btn btn-outline-primary my-1">Class 12</button>
            </li>*/
