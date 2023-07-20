import { Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import imgAbout from "../assets/img.png";

const BoxStyle = styled(Box)`
  background-color: ${({ theme }) => theme.about.bgc};
`;
const ContainerStyle = styled(Container)`
  color: ${({ theme }) => theme.about.color};
`;
const ImageStyle = styled(Image)`
  background-color: ${({ theme }) => theme.about.bgcImg};
`;
const ButtonStyle = styled(Button)`
  background: ${({ theme }) => theme.about.bgcButton};
`;

export default function About() {
  const [t] = useTranslation("global");
  return (
    <>
      <BoxStyle
        sx={{
          //backgroundColor: "#000",//(theme) => `${theme.palette.mode === "dark" ? theme.about.bgc : "#fff"}`,
          padding: { lg: "2%", sm: "5%", xs: "5%" },
        }}
        id="sobre_me"
      >
        <ContainerStyle maxWidth={false}>
          <Box
            sx={{
              paddingRight: { lg: "10%", sm: "1%" },
              paddingLeft: { lg: "10%", sm: "1%" },
            }}
          >
            <Row>
              <Col xxl={5} style={{ textAlign: "center" }}>
                <Box>
                  <ImageStyle
                    className="responsive3"
                    style={{
                      textAlign: "center",
                      padding: "2%",
                      width: "100%",
                      height: "auto"
                    }}
                    src="https://us.123rf.com/450wm/dotshock/dotshock1602/dotshock160200726/52352665-negocio-de-inicio-desarrollador-de-software-trabajando-en-equipo-en-la-oficina-moderna.jpg?ver=6"
                    alt="JRV"
                  />
                </Box>
              </Col>
              <Col xxl={7} style={{ textAlign: "justify" }}>
                <Typography variant="h6" gutterBottom color={"#efb810"}>
                  <b>{t("about.title")}</b>
                </Typography>
                <Typography variant="body1" gutterBottom>
                  {t("about.description")}
                  <br />
                  <br />
                </Typography>
                <ButtonStyle
                  variant="outline-light"
                  onClick={() => window.open("/CV Resumen Jesus Romero.pdf")}
                >
                  {t("about.button")}
                </ButtonStyle>
              </Col>
            </Row>
          </Box>
        </ContainerStyle>
      </BoxStyle>
    </>
  );
}
