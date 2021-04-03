import React from "react";
import "../stylesheets/component2.scss";

const Component2 = () => {
  return (
    <div className="component2 rectangle container-fluid">
      <div className="heading">
        What is a <span style={{ color: "#FF5454" }}>COMPUTER</span> ?
      </div>
      <div className="content">
        Computer is simply a device which takes some instructions and shows
        result on your
        <br />
        screens. Now you must be wondering how are these instructions given to a
        <br />
        computer. These instructions are provided using{" "}
        <span style={{ color: "#3F3D56", fontWeight: "bold" }}>CODE</span>.
      </div>
    </div>
  );
};

export default Component2;
