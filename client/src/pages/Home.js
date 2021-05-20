import React from "react";
import { useHistory } from "react-router-dom";
import SpreadIllustration from "../components/SpreadIllustration";
import Benefits from "../components/Benefits";
import { Button } from "@material-ui/core";
import Locations from "./Locations";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    height: 300,
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

function Home() {
  const classes = useStyles();
  let history = useHistory();

  return (
    <div className="pt-5">
      {/* background image for home page- does not work atm
      <div
        style={{
          backgroundImage: clouds,
        }}
      > */}

      <div className={classes.root}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <SpreadIllustration data={"SPREAD ILLUSTRATION PROP DATA"} />
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper>
              <Locations />
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>FEATURES OF APP</Paper>
          </Grid>
        </Grid>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Paper className={classes.paper}>
              <Benefits data={"PROPS DATA"} />
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper className={classes.paper}>
              <Benefits data={"PROP DATA 2"} />
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper className={classes.paper}>
              <Benefits data={"PROP DATA 3"} />
            </Paper>
          </Grid>
        </Grid>
      </div>
      {/* </div> div for background image */}
    </div>
  );
}

export default Home;
