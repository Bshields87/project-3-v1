import React, { Component } from "react";
import campusMap from "../src/images/CampusMap.png";
import ImageMapper from "react-image-mapper";
import createReactClass from "create-react-class";
import CampusMap from "../src/components/pages/CampusMap";
import Dorm from "../src/components/pages/Dorm";
import CampusContainer from "./components/CampusContainer";

URL = campusMap;
const MAP = {
  name: "my-map",
  areas: [
    {
      name: "Dorms",
      shape: "poly",
      coords: [
        135,
        358,
        161,
        419,
        230,
        433,
        332,
        395,
        307,
        344,
        267,
        323,
        202,
        323
      ],
      fillColor: "rgba(0, 0, 255, 0.288)"
    },
    {
      name: "Gym",
      shape: "poly",
      coords: [273, 155, 312, 201, 393, 169, 359, 120],
      fillColor: "rgba(0, 140, 255, 0.294)"
    },
    {
      name: "Frat House",
      shape: "poly",
      coords: [366, 217, 382, 244, 435, 225, 419, 195],
      fillColor: "rgba(255, 0, 0, 0.233)"
    },
    {
      name: "Library",
      shape: "poly",
      coords: [494, 124, 518, 165, 566, 147, 543, 105],
      fillColor: "rgba(255, 255, 0, 0.246)"
    },
    {
      name: "Cafeteria",
      shape: "poly",
      coords: [528, 254, 541, 283, 616, 256, 591, 226],
      fillColor: " rgba(0, 70, 128, 0.472)"
    }
  ]
};

var Test = createReactClass({
  getInitialState() {
    return {
      hoveredArea: null,
      msg: null,
      moveMsg: null,
      currentPage: "CampusMap"
    };
  },
  load() {
    this.setState({ msg: "Interact with image !" });
  },
  clicked(area) {
    this.setState({
      currentPage: `${area.name}`,
      msg: `You clicked on ${area.shape} at coords ${JSON.stringify(
        area.coords
      )} !`
    });
    console.log(this.state);
  },
  clickedOutside(evt) {
    const coords = { x: evt.nativeEvent.layerX, y: evt.nativeEvent.layerY };
    this.setState({
      msg: `You clicked on the image at coords ${JSON.stringify(coords)} !`
    });
  },
  moveOnImage(evt) {
    const coords = { x: evt.nativeEvent.layerX, y: evt.nativeEvent.layerY };
    this.setState({
      moveMsg: `You moved on the image at coords ${JSON.stringify(coords)} !`
    });
  },
  enterArea(area) {
    this.setState({
      hoveredArea: area,
      msg: `You entered ${area.shape} ${area.name} at coords ${JSON.stringify(
        area.coords
      )} !`
    });
  },
  leaveArea(area) {
    this.setState({
      hoveredArea: null,
      msg: `You left ${area.shape} ${area.name} at coords ${JSON.stringify(
        area.coords
      )} !`
    });
  },
  moveOnArea(area, evt) {
    const coords = { x: evt.nativeEvent.layerX, y: evt.nativeEvent.layerY };
    this.setState({
      moveMsg: `You moved on ${area.shape} ${
        area.name
      } at coords ${JSON.stringify(coords)} !`
    });
  },

  getTipPosition(area) {
    return { top: `${area.center[1]}px`, left: `${area.center[0]}px` };
  },
  handlePageChange(area) {
    this.setState({ currentPage: area });
  },

  render() {
    return (
      <div className="grid">
        <div className="presenter">
          <div
            style={{
              position: "relative",
              width: "1000px",
              height: "600px",
              margin: "20px auto"
            }}
          >
            <ImageMapper
              src={URL}
              map={MAP}
              onLoad={() => this.load()}
              onClick={area => this.clicked(area)}
              onMouseEnter={area => this.enterArea(area)}
              onMouseLeave={area => this.leaveArea(area)}
              onMouseMove={(area, _, evt) => this.moveOnArea(area, evt)}
              onImageClick={evt => this.clickedOutside(evt)}
              onImageMouseMove={evt => this.moveOnImage(evt)}
              handlePageChange={this.handlePageChange}
            />
            {this.state.hoveredArea && (
              <span
                className="tooltip"
                style={{ ...this.getTipPosition(this.state.hoveredArea) }}
              >
                {this.state.hoveredArea && this.state.hoveredArea.name}
              </span>
            )}
          </div>
          <pre className="message">
            {this.state.msg ? this.state.msg : null}
          </pre>
          <pre>{this.state.moveMsg ? this.state.moveMsg : null}</pre>
        </div>
      </div>
    );
  }
});

export default Test;
