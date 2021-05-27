import React, { useRef, useEffect, useState } from "react";
import API from "../../Utils/API";
import {
  Grid,
  Paper,
  makeStyles,
  Box,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@material-ui/core";
function CommunityRatings({ id }) {
  const [reviewList, setReviewList] = useState();

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

  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  useEffect(() => {
    API.getMapID(id)
      .then((res) => {
        console.log("//////////////");
        // res.data.reviews refers to whatever the object
        // probably wont be res.data.reviews but some other stuff
        //  inside of the location in mongodb that holds the reviews
        // const reviews = res.data.reviews
        console.log("//////////////");

        // let reviewList = reviews.map((review) => (
        //   <Box p={2} xs={12} sm={6}>

        //   </Box>
        // ));
        // setReviewList(reviewList);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Grid
      container
      spacing={4}
      direction="column"
      alignItems="center"
      justify="center"
    >
      <Grid item xs={12}>
        <a>USER RATINGS:</a>
        <a>{id}</a>

        <Card className={classes.root}>
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              PLACEHOLDER HERE
            </Typography>
            <Typography variant="h5" component="h2">
              be{bull}nev{bull}o{bull}lent
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              adjective
            </Typography>
            <Typography variant="body2" component="p">
              well meaning and kindly.
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
          <CardActions></CardActions>
        </Card>
      </Grid>
    </Grid>
  );
}

export default CommunityRatings;
