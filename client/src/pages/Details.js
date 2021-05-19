import React from "react";
import MapExport from "../components/Map/index";

import CommunityRatings from "../components/CommunityRatings";
import { useHistory, useParams } from "react-router-dom";

function Details() {
  let history = useHistory();
  let { id } = useParams();

  const redirect = () => {
    history.push("/ratepost");
  };

  return (
    <div>
      <br />
      <br />
      <br />
      <MapExport id={id} />

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
