import React from "react";
import RateForm from "../RateForm/RateForm.js";
function PostRating() {
  return (
    <div className="pt-5">
      <br />
      {/* the only reason i put a pt-5 and br/ divs is 
      because this component renders at the very top
      of the page and the Nav bar cover it.  */}
      <RateForm />
    </div>
  );
}

export default PostRating;
