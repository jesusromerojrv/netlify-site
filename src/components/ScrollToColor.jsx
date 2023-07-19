import React from "react";
import useScrollTrigger from '@mui/material/useScrollTrigger';

const ScrollHandler = props => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: props.window ? window() : undefined
  });


  return React.cloneElement(props.children, {
    style: {
      backgroundColor: trigger ? props.theme === "light" ? "#363637" : "#000" : props.theme === "light" ? "#EBECEC": "#1C2130",
      color: trigger ? "#fff" : props.theme === "light" ? "#000" : "#fff",
      transition: trigger ? "0.3s" : "0.5s",
      position: "sticky"
    }
  });
};

const ScrollToColor01 = props => {
  return <ScrollHandler {...props}>{props.children}</ScrollHandler>;
};

export default ScrollToColor01;
