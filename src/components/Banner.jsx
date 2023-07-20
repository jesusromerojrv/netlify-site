import bannerImg from "../assets/perfil.png";
import perfilResponsive from "../assets/img.png";
import * as React from "react";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Image from "react-bootstrap/Image";
import Typography from "@mui/material/Typography";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

export function Banner() {
  return (
    <>
      <ImgFija />
    </>
  );
}

const theme = createTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "#3f50b5",
      dark: "#002884",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
    },
    white: {
      main: "#fff",
    },
    colorFacebook: {
      main: "#128c7e",
    },
    colorTwitter: {
      main: "#00acee",
    },
    colorInstagram: {
      main: "#3f729b",
    },
  },
});

const DivStyle = styled.div`
  background-color: ${({ theme }) => theme.hero.bgc};
  color: ${({ theme }) => theme.hero.colorLetters};
`;

const TypographyStyle = styled(Typography)`
  color: ${({ theme }) => theme.hero.colorLetters};
`;

const PStyle = styled.p`
  color: ${({ theme }) => theme.hero.colorLetters};
`;

export function ImgFija() {
  const [t] = useTranslation("global");
  const screenHeight = window.innerHeight;
  return (
    <ThemeProvider theme={theme}>
      <DivStyle
        style={{
          width: "100%",
          color: "#efb810",
        }}
        id="banner"
      >
        <Container
          maxWidth="md"
          component="footer"
          sx={{
            py: [3, 6],
            textAlign: "center",
          }}
        >
          <Row>
            <Box sx={{ display: { md: "none", xs: "block" } }}>
              <Image
                style={{ textAlign: "center" }}
                width={"250px"}
                height={"auto"}
                src={perfilResponsive}
                alt="JRV"
              />
            </Box>
            <Col
              xs={12}
              sm={12}
              md={12}
              lg={6}
              style={{
                alignItems: "center",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div style={{}}>
                <TypographyStyle
                  variant="body1"
                  gutterBottom
                  style={{
                    fontFamily: "cursive",
                    fontSize: "36px",
                    paddingTop: "5%",
                  }}
                >
                  "{t("hero.phrase")}"
                </TypographyStyle>
                <br />
                <br />
                <h2>Jesús Romero Vázquez</h2>
                <PStyle style={{fontSize: "24px" }}>
                  {t("hero.career")}
                </PStyle>
                <hr />
                <Button
                  variant="contained"
                  startIcon={<WhatsAppIcon color="white" />}
                  sx={{
                    backgroundColor: "#128c7e",
                  }}
                  onClick={() => window.open("https://wa.me/+528721373963")}
                >
                  {t("hero.button")}
                </Button>
              </div>
            </Col>
            <Col xs={12} sm={12} md={12} lg={6}>
              <Box sx={{ display: { md: "block", xs: "none" } }}>
                <Image
                  style={{ textAlign: "center" }}
                  className="responsive2"
                  src={bannerImg}
                />
              </Box>
            </Col>
          </Row>
        </Container>
      </DivStyle>
    </ThemeProvider>
  );
}
