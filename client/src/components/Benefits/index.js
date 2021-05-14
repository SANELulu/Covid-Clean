import React from "react";

function Benefits({ data }) {
  return (
    <div>
      <h5>{data}</h5>
      <a className="p-1" href="https://placeholder.com">
        <img src="https://via.placeholder.com/350x200"></img>
      </a>
    </div>
  );
}

export default Benefits;
