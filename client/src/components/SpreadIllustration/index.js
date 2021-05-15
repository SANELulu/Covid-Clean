import React from "react";
import spreadImage from "../../assets/cleanmind.png";
import "./style.css";
import Grid from "@material-ui/core/Grid";
function SpreadIllustration({ data }) {
  return (
    <div>
      <Grid>
        <h5>{data}</h5>
        <a href="/">
          <img id="spread" src={spreadImage}></img>
        </a>
      </Grid>
    </div>
  );
}

export default SpreadIllustration;
