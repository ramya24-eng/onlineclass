import React from "react";
import "./HomePage.scss";

let standard = [
  " Class 1",
  " Class 2",
  " Class 3",
  " Class 4",
  " Class 5",
  " Class 6",
  " Class 7",
  " Class 8",
  " Class 9",
  " Class 10",
  " Class 11",
  " Class 12",
];
function HomePage() {
  let classBlock = standard.map((item) => {
    return (
      <div className="oc-classblock">
        <h4>{item}</h4>
        <h6>GO TO CLASS --></h6>
      </div>
    );
  });
  return <div className="oc-homecontent">{classBlock}</div>;
}

export default HomePage;
