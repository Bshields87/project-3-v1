import React from "react";
import campusMap from "../../images/CampusMap.png";
import ImageMapper from "react-image-mapper";
import "../pages/CampusMap.css";

function CampusMap(props) {
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
  console.log(this);
  return (
    <div className="container" id="campusMap">
      <ImageMapper
        src={URL}
        map={MAP}
        style={{
          width: "300%",
          height: undefined,
          aspectRatio: 1
        }}
        onClick={() => props.handlePageChange("Dorm")}
        // onClick={area => this.clicked(area)}
        // onImageClick={evt => this.clickedOutside(evt)}
      />
    </div>
  );
}

export default CampusMap;
