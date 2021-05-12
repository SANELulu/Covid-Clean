import React from "react";
import Map from "../components/Map";
import PostRating from "../components/PostRating";
import CommunityRatings from "../components/CommunityRatings";
function Details() {
  return (
    <div>
      <a>DETAILS OF LOCATION</a>
      <br />
      <br />
      <Map />
      <br />
      <PostRating />
      <br />
      <CommunityRatings />
    </div>
  );
}

export default Details;
