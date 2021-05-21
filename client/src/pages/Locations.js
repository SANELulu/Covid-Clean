import React, { useRef, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import Location from "../components/Location";
import Grid from "@material-ui/core/Grid";
import API from "../Utils/API";
import Paper from "@material-ui/core/Paper";

//map out locations from mongo db to render each location component
function Locations() {
  const [listLocation, setListLocation] = useState();

  let history = useHistory();
  // let { params } = useParams();
  // const redirect = () => {
  //   // console.log(id);
  //   // history.push("/details/" + id);
  // };

  useEffect(() => {
    API.getMap().then((res) => {
      const restaurants = res.data;
      const id = res.data.id;
      console.log(restaurants[0].id);
      console.log(restaurants[0].features[0].properties.title);
      console.log(restaurants[0].features[0].properties.description);

      const redirect = (e) => {
        let ID = e.target.id;
        console.log(e.target.id);
        history.push("/details" + "/" + restaurants[ID - 1].id);
      };

      let listLocations = restaurants.map((location) => (
        <Grid>
          <Paper>
            <div className="justify-content-center text-center pb-4">
              <h5>title:{location.features[0].properties.title}</h5>
              <img
                onClick={redirect}
                id={location.id}
                src="https://via.placeholder.com/600x150"
              ></img>
            </div>
          </Paper>
        </Grid>
      ));
      setListLocation(listLocations);
    });
  }, []);

  return (
    <Grid container spacing={4}>
      <div className="pt-5">{listLocation}</div>
    </Grid>
  );
}

export default Locations;

// <Grid container spacing={4}>
//   <Grid item xs={12} md={6}>
//     <Location data={"restaurant 1"} />
//   </Grid>
//   <br />
//   <Grid item xs={12} md={6}>
//     <Location data={"restaurant 2"} />
//   </Grid>
//   <br />
//   <Grid item xs={12} md={6}>
//     <Location data={"restaurant 3"} />
//   </Grid>
//   <br />
//   <Grid item xs={12} md={6}>
//     <Location data={"restaurant 4"} />
//   </Grid>
// </Grid>
