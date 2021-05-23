import React from "react";
import MapExport from "../components/Map/index";
import { Fade } from "react-reveal";
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
      <Fade left delay={900}>
        <br />
        <br />
        <br />
        <MapExport id={id} />
      </Fade>
      <br />
      <Fade bottom delay={900}>
        <button onClick={redirect} type="button" className="btn btn-dark">
          post rating?
        </button>

        <br />
        <CommunityRatings />
      </Fade>
    </div>
  );
}

export default Details;
