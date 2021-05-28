import React from "react";
import spreadImage from "../../assets/cleanmind.png";
import "./style.css";
import Grid from "@material-ui/core/Grid";
import { Fade } from "react-reveal";

function SpreadIllustration({ data }) {
  return (
    <Fade top delay={900}>
      <div>
        <Grid>
          <a href="/">
            <img id="spread" src={spreadImage}></img>
          </a>
        </Grid>
      </div>
    </Fade>
  );
}

export default SpreadIllustration;
