import React, { Component } from "react";
import { Modal, Button, Row, Col, Form } from "react-bootstrap";
import TeacherDetailform from "./teacher-detail-form/TeacherDetailform.js";
import "./StaffListdisplay.scss";

export class StaffListmodal extends Component {
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
            <h3 className="mx-5 tdf-header">ADD TUTOR</h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <TeacherDetailform />
        </Modal.Body>
      </Modal>
    );
  }
}
