import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import Home from "@mui/icons-material/HomeOutlined";
import Drawer from "@mui/material/Drawer";
import NavListDrawer from "./NavListDrawer";
import ScrollToColor from "./ScrollToColor";
import LaptopIcon from "@mui/icons-material/Laptop";
import { useState } from "react";
import * as React from "react";
import SelectorLen from "./SelectorLenguague";
import CustomizedSwitches from "./DarkMode";
import {useTranslation} from "react-i18next";

export default function Header(props) {
  const [t, i18n] = useTranslation("global");
  const [open, setOpen] = useState(false);

  return (
    <React.Fragment>
      <ScrollToColor theme={props.theme}>
        <AppBar elevation={0}>
          <Toolbar>
            <Typography variant="h6" component="div" color={"#efb810"} sx={{ display: { md: "block", xs: "none" } }}>
              <b>{t("header.title")}</b>
            </Typography>
            <Box sx={{ flexGrow: 1, display: "flex", marginRight: "2%" }}>
              <SelectorLen theme={props.theme}/>
            </Box>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <Button href="/#banner" color="inherit">
              {t("header.home")}
              </Button>
              <Button href="/#sobre_me" color="inherit">
              {t("header.about_me")}
              </Button>
              <Button href="/#portafolio" color="inherit">
              {t("header.projects")}
              </Button>
              <Button href="/#skills" color="inherit">
              {t("header.skills")}
              </Button>
              <Button href="/#contenedorContacto" color="inherit">
              {t("header.contact")}
              </Button>
            </Box>
            <Box sx={{marginLeft: "1%"}}>
              <CustomizedSwitches id="sw" theme={props.theme} setTheme={props.setTheme}/>
            </Box>
          </Toolbar>
        </AppBar>
      </ScrollToColor>
      <Drawer open={open} anchor="left" onClose={() => setOpen(false)}>
        <NavListDrawer />
      </Drawer>
    </React.Fragment>
  );
}
