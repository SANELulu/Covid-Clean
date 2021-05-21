import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { useHistory } from "react-router-dom";
import "./style.css";
function Location({ data }) {
  let history = useHistory();

  const redirect = () => {
    history.push("/details");
  };

  return (
    <div>
      <Grid>
        <Paper>
          <div className="justify-content-center text-center pb-4">
            <h5>name:{data}</h5>
            <img
              onClick={redirect}
              id="location-image-width"
              src="https://via.placeholder.com/600x150"
            ></img>
          </div>
        </Paper>
      </Grid>
    </div>
  );
}

export default Location;
