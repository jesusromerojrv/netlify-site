import { Banner } from "./Banner";
import Cards from "./Cards";
import About from "./About";
import Skills from "./Skills";
import Contacto from "./Contacto";
import * as React from "react";
import { Box } from "@mui/material";
export function Body() {
  return (
    <Box sx={{ textAlign: { xs: "center" } }}>
      <Banner />
      <About />
      <Cards />
      <Skills />
      <Contacto />
    </Box>
  );
}
