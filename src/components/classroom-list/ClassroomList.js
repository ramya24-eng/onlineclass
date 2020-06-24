import React, { Component } from "react";
import firestore from "./../../firebase.js";
import { Link, Route } from "react-router-dom";
import "./ClassroomList.scss";
import ClassroomListdetails from "./ClassroomListdetails.js";

const db = firestore.collection("teacherDetail");

var listItems;
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

class ClassDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classes: [],
    };
  }

  listDetails = (item) => {
    console.log(item);
    db.where("class", "array-contains", item)
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          let classes = doc.data();
          console.log(classes);
          this.setState((prevState) => {
            return {
              classes: prevState.classes.concat(classes),
            };
          });
          console.log(this.state.classes);
          console.log("pause here");
        });
      });
  };

  render() {
    return (
      <div className="cl-container">
        <h1>Classlist </h1>
        {
          (listItems = standard.map((item) => (
            <Link
              to={{
                pathname: "/details",
                state: { stdvalue: this.state.classes },
              }}
            >
              <button
                value={item}
                onClick={() => {
                  this.listDetails(item);
                }}
              >
                {item}
              </button>
            </Link>
          )))
        }
        <Route
          exact
          path="/details"
          render={(props) => <ClassroomListdetails {...props} />}
        >
          <ClassroomListdetails />
        </Route>
      </div>
    );
  }
}

export default ClassDetails;

{
  /*<p className="cl-container">TeacherName - Subject</p>
{this.state.classes.map((info) => (
  <p className="cl-container">
    {info.teacherName} - {info.subject}
  </p>
))}*/
}
