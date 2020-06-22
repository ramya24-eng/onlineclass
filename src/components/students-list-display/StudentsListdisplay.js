import React, { useState, Component } from "react";
import firestore from "./../../firebase.js";
import { Link, Route } from "react-router-dom";
import "./StudentsListdisplay.scss";
import { Button, ButtonToolbar } from "react-bootstrap";
import { StudentsListmodal } from "./StudentsListmodal.js";

//let database = firestore.collection("teacherDetail");
export class StudentsListdisplay extends Component {
  //const [staffdetail, setstaffdetail] = useState([]);
  constructor(props) {
    super(props);
    this.state = {
      studentsdetail: [],
      addModalshow: false,
    };
  }

  componentDidMount() {
    this.refreshList();
  }

  refreshList() {
    const database = firestore.collection("StudentsDetail");
    database.get().then((snapshot) => {
      //console.log(snapshot);
      snapshot.docs.forEach((doc) => {
        const data = doc.data();
        this.setState({
          studentsdetail: [...this.state.studentsdetail, data],
        });
        console.log(data);
      });
    });
  }

  render() {
    //const { staffdetail } = this.state;
    let addModalClose = () => this.setState({ addModalshow: false });
    return (
      <div className="sld-container">
        <h3>Students list</h3>

        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">
                <ButtonToolbar>
                  <Button
                    variant="primary"
                    onClick={() => this.setState({ addModalshow: true })}
                  >
                    +
                  </Button>
                  <StudentsListmodal
                    show={this.state.addModalshow}
                    onHide={addModalClose}
                    scrollable="true"
                  />
                </ButtonToolbar>
              </th>
              <th scope="col">StudentName</th>
              <th scope="col">Register Number</th>
              <th scope="col">Email</th>
              <th scope="col">Class</th>
            </tr>
          </thead>
          <tbody>
            {this.state.studentsdetail.map((item, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>{item.studentName}</td>
                <td>{item.regno}</td>
                <td>{item.email}</td>
                <td>{item.class}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default StudentsListdisplay;
