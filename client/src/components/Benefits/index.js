//

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Fade } from "react-reveal";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function Benefits() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        ></Typography>
        <Typography variant="h3" component="h2">
          <Fade left>Features</Fade>
        </Typography>
        <br></br>
        <Typography variant="h5" component="h2">
          <Fade left>
            This app provides tools for you to get back to life during the
            pandemic. With local covid data and an integrated map you can feel
            free to start living life safer. Select a location and share how
            safe it is by rating your experience.
          </Fade>
        </Typography>
        <br></br>
        <Typography variant="h4" component="h2">
          <Fade left>Let's Get Back To Normal!</Fade>
        </Typography>
      </CardContent>
      <CardActions></CardActions>
    </Card>
  );
}
// export default Benefits;
