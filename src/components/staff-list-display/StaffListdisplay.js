import React, { useState, Component } from "react";
import firestore from "./../../firebase.js";
import { Link, Route } from "react-router-dom";
import "./StaffListdisplay.scss";
import { Button, ButtonToolbar } from "react-bootstrap";
import { StaffListmodal } from "./StaffListmodal.js";

//let database = firestore.collection("teacherDetail");
export class StaffListdisplay extends Component {
  //const [staffdetail, setstaffdetail] = useState([]);
  constructor(props) {
    super(props);
    this.state = {
      staffdetail: [],
      addModalshow: false,
    };
  }

  componentDidMount() {
    this.refreshList();
  }

  refreshList() {
    const database = firestore.collection("teacherDetail");
    database.get().then((snapshot) => {
      //console.log(snapshot);
      snapshot.docs.forEach((doc) => {
        const data = doc.data();
        this.setState({
          staffdetail: [...this.state.staffdetail, data],
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
        <h3>Teachers list</h3>

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
                  <StaffListmodal
                    show={this.state.addModalshow}
                    onHide={addModalClose}
                    scrollable="true"
                  />
                </ButtonToolbar>
              </th>
              <th scope="col">StaffName</th>
              <th scope="col">Email</th>
              <th scope="col">Class</th>
              <th scope="col">Subject</th>
            </tr>
          </thead>
          <tbody>
            {this.state.staffdetail.map((item, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>{item.teacherName}</td>
                <td>{item.email}</td>
                <td>{item.class}</td>
                <td>{item.subject}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default StaffListdisplay;
