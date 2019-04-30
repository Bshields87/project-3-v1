import React from "react";
import dorm from "../../images/Dorm.jpg";
import "../pages/Dorm.css";

function Dorm() {
  console.log("i was clicked");
  return (
    <div>
      <h1>Welcome to the Dorms</h1>
      <img src={dorm} alt="dorm" id="dorm" />
    </div>
  );
}

export default Dorm;
