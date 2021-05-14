import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

function Location({ data, info, comment }) {
  return (
    <div>
      <Grid container justify="center" alignItems="center" item xs={12} s={6}>
        <Paper>
          <h5>{data}</h5>
          <h5>{info}</h5>
          <h5>{comment}</h5>
        </Paper>
      </Grid>
    </div>
  );
}

export default Location;
