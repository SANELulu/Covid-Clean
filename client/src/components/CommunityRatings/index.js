import React, { useRef, useEffect, useState } from "react";
import API from "../../Utils/API";
import {
  Grid,
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
      width: 500,
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
    card: {
      width: "100px",
    },
  });

  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  useEffect(() => {
    API.getMapID(id)
      .then((res) => {
        const reviews = res.data.reviews;
        let reviewList = reviews.map((review) => (
          <Box
            p={2}
            xs={12}
            sm={6}
            style={{
              maxWidth: "200px",
              height: "auto",
            }}
          >
            <Grid item className={classes.root}>
              <Card className={classes.root}>
                <CardContent>
                  <Typography variant="h5" component="h2">
                    {review.comment}
                  </Typography>
                  <Typography
                    className={classes.title}
                    color="textSecondary"
                    gutterBottom
                  >
                    {/* Clean Rating: {review.cleanRating + ""} */}
                  </Typography>
                  <Typography className={classes.pos} color="textSecondary">
                    {/* sDRating: {review.sdRating + ""} */}
                  </Typography>
                  <Typography className={classes.pos} color="textSecondary">
                    Star Rating: {review.starRating}
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
      direction="row"
      alignItems="flex-start"
      justify="center"
    >
      {allReviews}
    </Grid>
  );
}

export default CommunityRatings;

// import React, { useRef, useEffect, useState } from “react”;
// import API from “../../Utils/API”;
// import {
//   Grid,
//   makeStyles,
//   Box,
//   Card,
//   CardActions,
//   CardContent,
//   Typography,
// } from “@material-ui/core”;
// function CommunityRatings({ id }) {
//   const [allReviews, setReviewList] = useState();
//   const useStyles = makeStyles({
//     root: {
//       width: 500,
//     },
//     bullet: {
//       display: “inline-block”,
//       margin: “0 2px”,
//       transform: “scale(0.8)“,
//     },
//     title: {
//       fontSize: 14,
//     },
//     pos: {
//       marginBottom: 12,
//     },
//     card: {
//       width: “100px”,
//     },
//   });
//   const classes = useStyles();
//   const bull = <span className={classes.bullet}>•</span>;
//   useEffect(() => {
//     API.getMapID(id)
//       .then((res) => {
//         const reviews = res.data.reviews;
//         let reviewList = reviews.map((review) => (
//           <Box
//             p={2}
//             xs={12}
//             sm={6}
//             style={{
//               maxWidth: “200px”,
//               height: “auto”,
//             }}
//           >
//             <Grid item className={classes.root}>
//               <Card className={classes.root}>
//                 <CardContent>
//                   <Typography variant=“h5" component=“h2”>
//                     {review.comment}
//                   </Typography>
//                   <Typography
//                     className={classes.title}
//                     color=“textSecondary”
//                     gutterBottom
//                   >
//                     Clean Rating: {review.cleanRating + “”}
//                   </Typography>
//                   <Typography className={classes.pos} color=“textSecondary”>
//                     sDRating: {review.sdRating + “”}
//                   </Typography>
//                   <Typography className={classes.pos} color=“textSecondary”>
//                   <div>
//                  {[...Array(5)].map((star, i) => {
//                  const ratingValue = i + 1;
//                     return (
//                     <label>
//                          <input
//                           type=“radio”
//                           name=“rating”
//                           value={review.starRating}
//                          />
//                     <FaStar
//                     className=“star”
//                     color={ratingValue <= (hover || rating) ? “#FFC107" : “#E4E5E9”}
//                     size={35}
//                     value={review.starRating}
//                     />
//                    </label>
//         );
//       })}
//     </div>
//                     Star Rating: {review.starRating}
//                   </Typography>
//                 </CardContent>
//                 <CardActions></CardActions>
//               </Card>
//             </Grid>
//           </Box>
//         ));
//         setReviewList(reviewList);
//       })
//       .catch((err) => console.log(err));
//   }, []);
//   return (
//     <Grid
//       container
//       spacing={4}
//       direction=“row”
//       alignItems=“flex-start”
//       justify=“center”
//     >
//       {allReviews}
//     </Grid>
//   );
// }
// export default CommunityRatings;
