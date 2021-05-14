import React from "react";
import MapExport from "../components/Map/index";
import PostRating from "../components/PostRating";
import CommunityRatings from "../components/CommunityRatings";
import { useHistory } from "react-router-dom";
function Details() {
  let history = useHistory();

  const redirect = () => {
    history.push("/");
  };

  return (
    <div>
      <a>DETAILS OF LOCATION</a>
      <br />
      <br />
      <a>map export</a>
      <MapExport />
      <br />

      <button onClick={redirect} type="button" className="btn btn-dark">
        post rating?
      </button>

      <br />
      <CommunityRatings />
    </div>
  );
}

export default Details;
