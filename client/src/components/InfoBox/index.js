import React from "react";
import "./InfoBox.css";
import {
  Grid,
  Paper,
  makeStyles,
  Box,
  Card,
  CardContent,
  Typography,
} from "@material-ui/core";
function InfoBox({ title, cases, total, active, isRed, ...props }) {
  console.log(title, active);
  return (
    <Grid item xs={6} sm={3}>
      <Card
        onClick={props.onClick}
        className={`infoBox ${active && "infoBox--selected"} ${
          isRed && "infoBox--red"
        }`}
      >
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            {title}
          </Typography>
          <h2 className={`infoBox__cases ${!isRed && "infoBox__cases--green"}`}>
            {cases}
          </h2>

          <Typography className="infoBox__total" color="textSecondary">
            {total} Total
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default InfoBox;
