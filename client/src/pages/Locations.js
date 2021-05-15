import React from "react";
import Location from "../components/Location";
import Grid from "@material-ui/core/Grid";

//map out locations from mongo db to render each location component
function Locations() {
  return (
    <div className="pt-5">
      <br />
      <a>IF SIGNED IN:</a>
      <br />
      <Grid container>
        <Grid item xs={12} sm={6}>
          <Location
            data={"restaurant 1"}
            info={"info 1"}
            comment={"comment 1"}
          />
        </Grid>
        <br />
        <Grid item xs={12} sm={6}>
          <Location
            data={"restaurant 2"}
            info={"info 2"}
            comment={"comment 2"}
          />
        </Grid>
        <br />
        <Grid item xs={12} sm={6}>
          <Location
            data={"restaurant 3"}
            info={"info 3"}
            comment={"comment 3 "}
          />
        </Grid>
        <br />
        <Grid item xs={12} sm={6}>
          <Location
            data={"restaurant 4"}
            info={"info 4"}
            comment={"comment 4444444"}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default Locations;
