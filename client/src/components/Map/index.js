import React from "react";
import Map from "./Map";
import { Grid } from "@material-ui/core";

function MapExport({ id }) {
  return (
    <Grid container spacing={4} justify="center" alignItems="center">
      <Grid item xs={8}>
        <Map id={id} />
      </Grid>
    </Grid>
  );
}

export default MapExport;
