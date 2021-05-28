import React from "react";
import Checkbox from "@material-ui/core/Checkbox";

export default function Checkboxes(props) {
  return (
    <div>
      <Checkbox
        color="primary"
        inputProps={{ "aria-label": "secondary checkbox" }}
        onChange={props.onChange}
      />
    </div>
  );
}
