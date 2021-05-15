import React from "react";
import "./style.css";
function Benefits({ data }) {
  return (
    <div>
      <h5>{data}</h5>
      <a className="p-1" href="https://placeholder.com">
        <img
          className="benefits-img"
          src="https://via.placeholder.com/350x200"
        ></img>
      </a>
    </div>
  );
}

export default Benefits;
