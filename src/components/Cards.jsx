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
import Stack from "@mui/material/Stack";

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

import { Skeleton } from "@mui/material";
import { useState, useEffect } from "react";

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
                    style={{ height: "250px", }}
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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
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
        <DialogContent
          dividers
          sx={{
            width: { lg: "600px", xs: "auto" },
            height: { lg: "500px", xs: "400px" },
          }}
        >
          <Tabs
            defaultActiveKey="home"
            transition={false}
            id="noanim-tab-example"
            className="mb-3"
          >
            <Tab eventKey="home" title="Imagenes">
              <Carousel>
                {item.moreImg?.map((x, index) => (
                  <Carousel.Item key={index} interval={5000}>
                    {loading ? (
                      <Skeleton
                        variant="rectangular"
                        sx={{
                          width: { lg: "600px", xs: "auto" },
                          height: { lg: "500px", xs: "400px" },
                        }}
                        animation="wave"
                      />
                    ) : (
                      <Image
                        style={{
                          objectFit: "cover",
                          width: "100%",
                          height: "100%",
                        }}
                        src={x}
                        alt={index}
                      />
                    )}
                  </Carousel.Item>
                ))}
              </Carousel>
            </Tab>
            <Tab eventKey="profile" title="Descripción">
              {item.description.map((desc, index) => (
                <Typography variant="body1" gutterBottom>
                  {desc}
                </Typography>
              ))}
            </Tab>
            <Tab eventKey="contact" title="Skills">
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
            </Tab>
          </Tabs>
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}
