import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import * as React from "react";

import PropTypes from "prop-types";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Carousel from "react-bootstrap/Carousel";
import { proyectos } from "../datos/portafolio";
import { useTranslation } from "react-i18next";
import styledComponents from "styled-components";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Stack from "@mui/material/Stack";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const DivStyle = styledComponents.div`
  background-color: ${({ theme }) => theme.hero.bgc};
  color: ${({ theme }) => theme.hero.colorLetters};
`;

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;
  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

let asf = [];

export default function Cards() {
  const [t] = useTranslation("global");
  const [open, setOpen] = React.useState(false);
  const [elementos, setElementos] = React.useState([]);
  const handleClickOpen = (e) => {
    setOpen(true);
    asf = JSON.stringify(e);
    setElementos(JSON.parse(asf));
    console.log(elementos);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <DivStyle style={{ padding: "2% 10% 2% 10%" }} id="portafolio">
      <Container
        maxWidth="MD"
        sx={{
          color: "#fff",
          textAlign: "center",
          padding: { lg: "1%", sm: "5%", xs: "5%" },
        }}
      >
        <Typography variant="h6" gutterBottom color={"#efb810"}>
          <b>{t("projects.title")}</b>
        </Typography>
        <hr />
        <br />
        <br />
        <Row>
          <Grid
            container
            rowSpacing={3}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            {proyectos.map(
              (
                item,
                index //Formato del grid para el contenido del pie de página
              ) => (
                <Grid item xs={12} sm={12} md={4} key={index}>
                  <Item
                    style={{ height: "250px" }}
                    onClick={() => handleClickOpen(item)}
                  >
                    <Image
                      style={{
                        objectFit: "cover",
                        width: "100%",
                        height: "100%",
                        cursor: "pointer",
                      }}
                      src={item.img}
                      alt={item.title}
                    />
                  </Item>
                </Grid>
              )
            )}
          </Grid>
        </Row>
      </Container>
      {open ? (
        <Venta open={open} handleClose={handleClose} item={elementos} />
      ) : null}
    </DivStyle>
  );
}

export function Venta({ open, handleClose, item }) {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        maxWidth={"lg"}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          {item.title}
        </BootstrapDialogTitle>
        <DialogContent dividers style={{ height: "500px", width: "600px" }}>
          <Box sx={{ width: "100%", typography: "body1" }}>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                >
                  <Tab label="Imágenes" value="1" />
                  <Tab label="Descripción" value="2" />
                  <Tab label="Tecnologías" value="3" />
                </TabList>
              </Box>
              <TabPanel value="1">
                {" "}
                <Carousel>
                  {item.moreImg?.map((x, index) => (
                    <Carousel.Item key={index} interval={5000}>
                      <Image
                        style={{
                          objectFit: "cover",
                          width: "100%",
                          height: "100%",
                        }}
                        src={x}
                        alt={index}
                      />
                    </Carousel.Item>
                  ))}
                </Carousel>
              </TabPanel>
              <TabPanel value="2">
                {item.description.map((desc, index) => (
                  <Typography variant="body1" gutterBottom>
                    {desc}
                  </Typography>
                ))}
              </TabPanel>
              <TabPanel value="3">
                <Grid container rowSpacing={5}>
                  {item.skills.map((item, index) => (
                    <Grid item xs={12} sm={4} md={3} key={index}>
                      <Stack
                        direction="row"
                        spacing={{ xs: 1, sm: 2, md: 3 }}
                        justifyContent={"space-around"}
                      >
                        <Image
                          style={{
                            textAlign: "center",
                            width: "75px",
                            height: "75px",
                          }}
                          src={item}
                          alt="SKILL"
                        />
                      </Stack>
                    </Grid>
                  ))}
                </Grid>
              </TabPanel>
            </TabContext>
          </Box>
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}
