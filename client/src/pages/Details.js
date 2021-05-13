import React from "react";
import PostRating from "../components/PostRating";
import CommunityRatings from "../components/CommunityRatings";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MapExport from "../components/Map";

function Details() {
  // let history = Router();
  // const postRatingRedirect = (event) => {
  //   event.preventDefault();
  //   history.push("/postrating");
  // };

  return (
    <div>
      <a>DETAILS OF LOCATION</a>
      <br />
      <br />
      <div class="container">
        <div class="row">
          <div class="col-4">
            <MapExport />
          </div>
        </div>
      </div>

      <br />
      {/* <button onClick={postRatingRedirect}>POST RATING BUTTON</button> */}
      <br />
      <CommunityRatings />
    </div>
  );
}

export default Details;
