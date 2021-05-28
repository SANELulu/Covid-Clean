import React, { Component, useState } from "react";
// import StarRating from "./StarRating";
import Checkboxes from "./Checkbox";
import { FaStar } from "react-icons/fa";
import "./starRating.css";
import "./rate-form.css";
import API from "../../Utils/API";
// import axios from "axios";

const Form = ({ id }) => {
  const [comment, setComment] = useState();
  const [maskRating, setMaskRating] = useState(true);
  const [socialDistancingRating, setsocialDistancingRating] = useState(true);
  const [cleanlinessRating, setcleanlinessRating] = useState(true);
  // const [finalRating, setfinalRating] = useState();
  const [starRatingValue, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  // Grab currentUser and currentBusiness from the user db
  //    // Add the below fields to the user db to store that info

  const commentUpd = (event) => {
    setComment(event.target.value);
    console.log(comment);
  };

  const maskRatingUpd = (event) => {
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

  // const finalRatUpd = (event) => {
  //   setfinalRating(event.target.value);
  //   console.log(event.target.value);
  //   // console.log(finalRating);
  // };

  // Once the form is submited this function will post to the backend

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

  return (
    <div>
      <div className="rateForm">
        <form onSubmit={handleSubmit}>
          <label className="title">
            Hi {id} <br></br>Please rate your experience on: {id}
          </label>
          <br></br>

          {/* Rate if the employees are wearing masks and Gloves */}

          <label> Employees Wear Masks and Gloves</label>
          <Checkboxes className="checkbox" onChange={maskRatingUpd} />

          {/* Rate Social Distancing  */}

          <label>Social Distancing</label>
          <Checkboxes className="checkbox" onChange={distancingUpd} />

          {/* Rate Cleanliness */}

          <label>Cleanliness</label>
          <Checkboxes
            color="primary"
            inputProps={{ "aria-label": "secondary checkbox" }}
            className="checkbox"
            onChange={cleanlinessUpd}
          />

          <label>
            Please feel free to provide more details about your experience in{" "}
            {id}
          </label>
          <br></br>
          <textarea
            value={comment}
            placeholder="Leave Comment Here"
            onChange={commentUpd}
          ></textarea>

          <br></br>

          <label>Please provide your final Rating on {id}</label>
          <div>
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
                    className="star"
                    color={
                      ratingValue <= (hover || starRatingValue)
                        ? "#ffc107"
                        : "#e4e5e9"
                    }
                    size={35}
                    onMouseEnter={() => setHover(starRatingValue)}
                    onMouseLeave={() => setHover(null)}
                  />
                </label>
              );
            })}
          </div>

          <button className="buttonPost" type="submit">
            Post Rating
          </button>
        </form>
      </div>
    </div>

    // <div>
    //   <form onSubmit={handleSubmit}>
    //     <label>
    //       Hi  Please rate your experience on{"{id}"}

    //     </label>

    //     {/* Rate if the employees are wearing masks and Gloves */}
    //     <label>Employees wear Masks and Gloves</label>
    //     <Checkboxes onChange={maskRatingUpd} />

    //     {/* Rate Social Distancing  */}
    //     <label>Social Distancing</label>
    //     <Checkboxes onChange={distancingUpd} />

    //     {/* Rate Cleanliness */}
    //     <label>Cleanliness</label>
    //     <Checkboxes onChange={cleanlinessUpd} />

    //     <label>
    //       Please feel free to provide more details about your experience in
    //       {id}
    //     </label>
    //     <textarea
    //       value={comment}
    //       onChange={commentUpd}
    //     >
    //       Comment
    //     </textarea>

    //     <label>
    //       Please provide your final Rating on {id}
    //     </label>
    //     <StarRating onChange={finalRatUpd} />

    //     <button type="submit">Post Rating</button>
    //   </form>
    // </div>
  );
};
export default Form;
