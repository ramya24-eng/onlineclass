import React, { Component } from "react";

class ClassroomListdetails extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }

  componentDidMount() {
    console.log(this.props.location.state.stdvalue);
  }

  render() {
    return (
      <div class="cl-container">
        <p className="cl-container">TeacherName - Subject</p>
        {/*{this.props.location.map((info) => (
          <p className="cl-container">
            {info.teacherName} - {info.subject}
          </p>
        ))}*/}
      </div>
    );
  }
}

export default ClassroomListdetails;
