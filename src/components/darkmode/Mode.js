import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { dark, light } from "../../redux/darkmode/modeSlice";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { Button } from "@mui/material";

const Mode = () => {
  const dispatch = useDispatch();
  const mode = useSelector((store) => store.mode.mode);

  return (
    <div style={{ position: "absolute", top: "0", right: "0" }}>
      <Button
        onClick={() => (mode ? dispatch(light()) : dispatch(dark()))}
        size="small"
      >
        {mode ? <LightModeIcon /> : <DarkModeIcon />}
      </Button>
    </div>
  );
};

export default Mode;
