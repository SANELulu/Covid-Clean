import React from "react";
import Checkbox from "@material-ui/core/Checkbox";

export default function Checkboxes() {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked); 
    console.log('checked')
  };

  return (
    <div>
      <Checkbox
        color="primary"
        inputProps={{ "aria-label": "secondary checkbox" }}
        onChange={handleChange}
      />
    </div>
  );
}
