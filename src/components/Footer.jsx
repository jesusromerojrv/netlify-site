import Toolbar from "@mui/material/Toolbar";
import * as React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import IconButton from "@mui/material/IconButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

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
      main: "#3b5998",
    },
    colorLinkedin: {
      main: "#0e76a8",
    },
    colorInstagram: {
      main: "#3f729b",
    },
  },
});

const DivStyle = styled.div`
  background-color: ${({ theme }) => theme.barFooter.bgc};
`;

export default function Pie() {
  const [t] = useTranslation("global");
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <DivStyle
          style={{
            color: "#fff",
            minHeight: "100%",
            position: "relative",
            bottom: "0",
          }}
        >
          <Container //Formato para el contenedor de la parte inferior de la estructura
            maxWidth="md"
            component="footer"
            sx={{
              borderTop: (theme) => `1px solid ${theme.palette.divider}`,
              color: "#fff",
              py: [3, 6],
            }}
          >
            <div
              style={{
                alignItems: "center",
                display: "flex",
                justifyContent: "center",
                textAlign: "left",
              }}
            >
              <Typography variant="body1" component="div" sx={{ flexGrow: 1 }}>
                <b>{t("footer.email")}: </b> jesus-ali2000@hotmail.com
                <br />
                <b>{t("footer.phone")}: </b> (+52) 872 137 3963
              </Typography>
            </div>
            <hr />
            <Toolbar>
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1 }}
              ></Typography>
              <IconButton
                aria-label="delete"
                size="large"
                onClick={() =>
                  window.open("https://www.facebook.com/amorporelfut")
                }
              >
                <FacebookIcon color="white" />
              </IconButton>
              <IconButton
                aria-label="delete"
                size="large"
                onClick={() => window.open("https://github.com/jesusromerojrv")}
              >
                <GitHubIcon color="white" />
              </IconButton>
              <IconButton
                aria-label="delete"
                size="large"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/jes%C3%BAs-romero-09a991231"
                  )
                }
              >
                <LinkedInIcon color="white" />
              </IconButton>
            </Toolbar>
          </Container>
        </DivStyle>
      </ThemeProvider>
    </React.Fragment>
  );
}
