import React from "react";
import Location from "../components/Location";
import Grid from "@material-ui/core/Grid";
import API from "../Utils/API";

//map out locations from mongo db to render each location component
function Locations() {
  API.getMap().then((res) => {
    const restaurants = res.data;
    console.log(restaurants);
    // res.data[i].features[0].properties
    // restaurants.map((place , i) => {

    // })
  });

  return (
    <div className="pt-5">
      <br />
      <br />
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Location data={"restaurant 1"} />
        </Grid>
        <br />
        <Grid item xs={12} md={6}>
          <Location data={"restaurant 2"} />
        </Grid>
        <br />
        <Grid item xs={12} md={6}>
          <Location data={"restaurant 3"} />
        </Grid>
        <br />
        <Grid item xs={12} md={6}>
          <Location data={"restaurant 4"} />
        </Grid>
      </Grid>
    </div>
  );
}

export default Locations;
