import React, { Component, useState } from "react";
// import StarRating from "./StarRating";
import Checkboxes from "./Checkbox";
import { FaStar } from "react-icons/fa";
import "./starRating.css";
import "./rate-form.css";
import API from "../../Utils/API";
import {
  Grid,
  makeStyles,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  FormControlLabel,
  Switch,
  Fade,
} from "@material-ui/core";
// import axios from "axios";

const Form = ({ id }) => {
  const [comment, setComment] = useState();
  const [maskRating, setMaskRating] = useState(false);
  const [socialDistancingRating, setsocialDistancingRating] = useState(false);
  const [cleanlinessRating, setcleanlinessRating] = useState(false);

  const [starRatingValue, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  ///////////show and hide slider
  const [checked, setChecked] = React.useState(false);
  const handleChange = () => {
    setChecked((prev) => !prev);
  };
  ///////////////////////
  // Grab currentUser and currentBusiness from the user db
  //    // Add the below fields to the user db to store that info

  const commentUpd = (event) => {
    setComment(event.target.value);
  };

  const maskRatingUpd = (event) => {
    console.log(event.target.checked);
    setMaskRating(event.target.checked);
    console.log(maskRating);
  };

  const distancingUpd = (event) => {
    setsocialDistancingRating(event.target.checked);
    console.log(socialDistancingRating);
  };

  const cleanlinessUpd = (event) => {
    setcleanlinessRating(event.target.checked);
    console.log(cleanlinessRating);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit hittin boi");
    const review = {
      comment,
      maskRating,
      socialDistancingRating,
      cleanlinessRating,
      starRatingValue,
      id,
    };
    console.log(review);

    API.postReview({
      postReview: {
        comment: review.comment,
        maskRating: review.maskRating,
        sdRating: review.socialDistancingRating,
        cleanRating: review.cleanlinessRating,
        starRating: review.starRatingValue,
      },
      id: review.id,
    })
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

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

  return (
    <div>
      <Grid container spacing={4} justify="center">
        <Grid item xs={6}>
          <FormControlLabel
            style={{ textAlign: "center" }}
            control={<Switch checked={checked} onChange={handleChange} />}
            label="Post Rating? "
          />
          <Fade in={checked}>
            <form onSubmit={handleSubmit}>
              <Card
                className={classes.root}
                style={{
                  background:
                    "linear-gradient(45deg, #f8e6ff 20%, #4939ff 90%)",
                }}
              >
                <CardContent>
                  <Typography
                    className={classes.title}
                    color="textSecondary"
                    gutterBottom
                  >
                    Please rate your experience on: {id}
                  </Typography>
                  <Typography variant="h5" component="h2">
                    Masks and Gloves?
                    <Checkboxes className="checkbox" onChange={maskRatingUpd} />
                  </Typography>
                  <Typography className={classes.pos} color="textSecondary">
                    Social Distancing?
                    <Checkboxes className="checkbox" onChange={distancingUpd} />
                  </Typography>
                  <Typography variant="body2" component="p">
                    Cleanliness?
                    <Checkboxes
                      color="primary"
                      inputProps={{ "aria-label": "secondary checkbox" }}
                      className="checkbox"
                      onChange={cleanlinessUpd}
                    />
                    <br />
                    Additional Details?
                    <br />
                    <TextField
                      value={comment}
                      // justify="center"
                      id="outlined-size-small"
                      variant="outlined"
                      size="small"
                      onChange={commentUpd}
                    />
                    <Grid item direction="row" onSubmit={handleSubmit}>
                      {[...Array(5)].map((star, i) => {
                        const ratingValue = i + 1;
                        return (
                          <label className="star-rating">
                            <input
                              type="radio"
                              name="rating"
                              value={ratingValue}
                              onClick={() => setRating(ratingValue)}
                            />
                            <FaStar
                              display="inline-block"
                              className="star"
                              color={
                                ratingValue <= (hover || starRatingValue)
                                  ? "#ffc107"
                                  : "#e4e5e9"
                              }
                              size={30}
                              onMouseEnter={() => setHover(starRatingValue)}
                              onMouseLeave={() => setHover(null)}
                            />
                          </label>
                        );
                      })}

                      <Button
                        variant="outlined"
                        color="secondary"
                        className="buttonPost"
                        type="submit"
                      >
                        Submit
                      </Button>
                    </Grid>
                  </Typography>
                </CardContent>
              </Card>
            </form>
          </Fade>
        </Grid>
      </Grid>
    </div>
  );
};
export default Form;
