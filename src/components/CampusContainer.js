import React, { Component } from "react";
//import CampusMap from "./pages/CampusMap";
import Test from "../test";
import Dorm from "./pages/Dorm";
// import Gym from "./pages/Gym";
// import FratHouse from "./pages/FratHouse";
// import Library from "./pages/Library";
// import Cafeteria from "./pages/Cafeteria";

class CampusContainer extends Component {
  state = {
    currentPage: "Test"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  renderPage = () => {
    switch (this.state.currentPage) {
      case "Test":
        return <Test />;
      case "Dorm":
        return <Dorm />;
      //   case "Gym":
      //     return <Gym />;
      //   case "FratHouse":
      //     return <FratHouse />;
      //   case "Library":
      //     return <Library />;
      //   case "Cafeteria":
      //     return <Cafeteria />;

      default:
        return <Test />;
    }
  };
  render() {
    return (
      <div>
        <Test handlePageChange={this.handlePageChange} />
        {/* <NavTabs
          currentPage={this.state.currentPage}
          
        /> */}
        {this.renderPage()}
      </div>
    );
  }
}

export default CampusContainer;
