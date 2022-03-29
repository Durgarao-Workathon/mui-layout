import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { dark, light } from "../../redux/darkmode/modeSlice";
import SwitchButton from "./SwitchButton";

const Mode = () => {
  const dispatch = useDispatch();
  const mode = useSelector((store) => store.mode.mode);

  const handleChange = (event) => {
    if (event.target.checked) {
      dispatch(dark());
    } else {
      dispatch(light());
    }
  };

  return (
    <div style={{ position: "absolute", top: "0", right: "0" }}>
      <SwitchButton
        checked={mode}
        onChange={handleChange}
        inputProps={{ "aria-label": "controlled" }}
      />
    </div>
  );
};

export default Mode;
