import React, { Component } from "react";
import CampusContainer from "./components/CampusContainer";

class App extends Component {
  state = {
    isClicked: false
  };
  render() {
    console.log(this);
    return (
      <div>
        <CampusContainer />
      </div>
    );
  }
}

export default App;
