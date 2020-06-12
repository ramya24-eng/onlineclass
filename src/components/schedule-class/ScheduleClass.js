import React from "react";
import "./ScheduleClass.scss";

function ScheduleClass() {
  return (
    <div className="oc-container">
      <h3 className="mx-5 oc-header">SCHEDULE CLASS</h3>
      <form>
        <div class="oc-div-container form-group">
          <label for="classroom-id">Classroom Id</label>
          <br />
          <input
            type="text"
            class="form-control"
            name="classroom-id"
            id="classroom-id"
          />
        </div>

        <div class="oc-div-container form-group">
          <label for="exampleFormControlSelect1">Class</label>
          <select class="form-control" id="exampleFormControlSelect1">
            <option>Class 1</option>
            <option>Class 2</option>
            <option>Class 3</option>
            <option>Class 4</option>
            <option>Class 5</option>
            <option>Class 6</option>
            <option>Class 7</option>
            <option>Class 8</option>
            <option>Class 9</option>
            <option>Class 10</option>
            <option>Class 11</option>
            <option>Class 12</option>
          </select>
        </div>
        <div class="oc-div-container form-group">
          <label for="exampleFormControlSelect1">Subject</label>
          <select class="form-control" id="exampleFormControlSelect1">
            <option>English</option>
            <option>Tamil</option>
            <option>Maths</option>
            <option>Science</option>
            <option>Social</option>
            <option>Physics</option>
            <option>Chemistry</option>
            <option>Botany</option>
            <option>Zoology</option>
            <option>Economics</option>
            <option>Geography</option>
            <option>others</option>
          </select>
        </div>
        <div class="oc-div-container form-group">
          <label for="class">Duedate</label>

          <input type="text" class="form-control" name="duedate" id="duedate" />
        </div>
        <div class="oc-div-container form-group">
          <label for="class">Attach link</label>
          <input
            type="text"
            class="form-control"
            name="upload-link"
            id="upload-link"
          />
        </div>
        <button type="submit" class="oc-submit-btn mt-3">
          submit
        </button>
      </form>
    </div>
  );
}

export default ScheduleClass;
