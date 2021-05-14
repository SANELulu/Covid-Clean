import React from "react";
import Location from "../components/Location";

//map out locations from mongo db to render each location component
function Locations() {
  return (
    <div className="pt-5">
      <br />
      <a>IF SIGNED IN:</a>
      <br />

      <Location data={"restaurant 1"} info={"info 1"} comment={"comment 1"} />

      <br />

      <Location data={"restaurant 2"} info={"info 2"} comment={"comment 2"} />

      <br />

      <Location data={"restaurant 3"} info={"info 3"} comment={"comment 3 "} />

      <br />
      <Location data={"restaurant 4"} info={"info 4"} comment={"comment 4"} />
    </div>
  );
}

export default Locations;
