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
  const [allReviews, setReviewList] = useState();

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

        const reviews = res.data.reviews;
        console.log(reviews);
        console.log("//////////////");
        let reviewList = reviews.map((review) => (
          <Box p={2} xs={12} sm={6}>
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
                    Clean Rating: {review.cleanRating}
                  </Typography>
                  <Typography variant="h5" component="h2">
                    {review.comment}
                  </Typography>
                  <Typography className={classes.pos} color="textSecondary">
                    Star Rating: {review.starRating}
                  </Typography>
                  <Typography variant="body2" component="p">
                    <br />
                    sDRating: {review.sdRating}
                  </Typography>
                </CardContent>
                <CardActions></CardActions>
              </Card>
            </Grid>
          </Box>
        ));
        setReviewList(reviewList);
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
      {allReviews}
    </Grid>
  );
}

export default CommunityRatings;

// <Grid item xs={12}>
//         <a>USER RATINGS:</a>
//         <a>{id}</a>

//         <Card className={classes.root}>
//           <CardContent>
//             <Typography
//               className={classes.title}
//               color="textSecondary"
//               gutterBottom
//             >
//               PLACEHOLDER HERE
//             </Typography>
//             <Typography variant="h5" component="h2">
//               be{bull}nev{bull}o{bull}lent
//             </Typography>
//             <Typography className={classes.pos} color="textSecondary">
//               adjective
//             </Typography>
//             <Typography variant="body2" component="p">
//               well meaning and kindly.
//               <br />
//               {'"a benevolent smile"'}
//             </Typography>
//           </CardContent>
//           <CardActions></CardActions>
//         </Card>
//       </Grid>
