import React, { Component } from "react";
//import CampusContainer from "./components/CampusContainer";
import Test from "./test";
class App extends Component {
  state = {
    isClicked: false
  };
  render() {
    console.log(this);
    return (
      <div>
        <Test />
      </div>
    );
  }
}

export default App;
