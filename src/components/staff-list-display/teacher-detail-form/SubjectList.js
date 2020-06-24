import React, { Component } from "react";
import Select from "react-select";
import { Redirect } from "react-router-dom";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const addSubjectlist = () => console.log();

const SubjectList = () => (
  <Select
    placeholder="Select subject"
    isMulti
    options={options}
    className="basic-multi-select"
    classNamePrefix="select"
    theme={(theme) => ({
      ...theme,
      borderRadius: 0,
      colors: {
        ...theme.colors,
        primary25: "#ae52d4",
        primary: "#ae52d4",
      },
    })}
    onChange={addSubjectlist}
  />
);
