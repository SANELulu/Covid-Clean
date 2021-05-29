import React, { useRef, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
// import Location from "../components/Location";
import { Grid, Paper, makeStyles, Box } from "@material-ui/core";
import API from "../Utils/API";
import { Fade } from "react-reveal";
import "./style.css";
// import image from "../assets/lincoln-road-1.png";
//map out locations from mongo db to render each location component
function Locations() {
  const [listLocation, setListLocation] = useState();
  //styling for component
  const useStyles = makeStyles((theme) => ({
    spacing: 8,
    root: {
      flexGrow: 1,
      // background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    },
    image: {
      // width: "33%",
      // display: "flex",
      // flexGrow: 1,
      // width: "100vh",
      // alignItems: "center",
      // textAlign: "center",
      height: 50,
      width: "auto",
    },
  }));

  let history = useHistory();
  const classes = useStyles();

  useEffect(() => {
    API.getMap().then((res) => {
      const restaurants = res.data;
      const id = res.data.id;
      // console.log(restaurants[0].id);
      // console.log(restaurants[0].features[0].properties.title);
      // console.log(restaurants[0].features[0].properties.description);

      const redirect = (e) => {
        let ID = e.target.id;
        console.log(e.target.id);
        history.push("/details" + "/" + restaurants[ID - 1].id);
      };

      let listLocations = restaurants.map((location) => (
        <Box p={2} xs={12} sm={6}>
          {/* <h5>title : {location.features[0].properties.title}</h5> */}
          <Fade left cascade delay={900}>
            <img
              style={{
                borderRadius: 16,
                border: 1,
                // display: "inline",
                // alignItem: "center",
                // justifyContent: "center",
                // maxWidth: "500",
                // height: "auto",
                // works
                maxHeight: "200px",
                width: "auto",
              }}
              className="img-width"
              onClick={redirect}
              id={location.id}
              src={`./assets/lincoln-road-${location.id}.png`}
            ></img>
          </Fade>
        </Box>
      ));
      setListLocation(listLocations);
    });
  }, []);

  return (
    <Grid
      container
      spacing={4}
      justify="center"
      // alignItems="center"
      // spacing={4}
      className={classes.root}
    >
      {listLocation}
    </Grid>
  );
}

export default Locations;
