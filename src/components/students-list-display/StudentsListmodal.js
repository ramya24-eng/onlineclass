import React, { Component } from "react";
import { Modal, Button, Row, Col, Form } from "react-bootstrap";
import StudentDetailform from "./students-detail-form/StudentsDetailform.js";
//import "./StudentsListdisplay.scss";

export class StudentsListmodal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Modal
        {...this.props}
        size="lg"
        backdrop="static"
        autoFocus={true}
        class="modal-backdrop"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <h3 className="mx-5 tdf-header">STUDENTS FORM</h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <StudentDetailform />
        </Modal.Body>
      </Modal>
    );
  }
}
