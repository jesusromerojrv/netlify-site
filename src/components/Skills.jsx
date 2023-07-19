import { Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

const skills = [
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png",
    title: "CSS",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/800px-HTML5_Badge.svg.png",
    title: "HTML",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
    title: "JAVASCRIPT",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1184px-Vue.js_Logo_2.svg.png",
    title: "VUE JS",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
    title: "REACT",
  },
  {
    img: "https://static-00.iconduck.com/assets.00/node-js-icon-1817x2048-g8tzf91e.png",
    title: "NODE JS",
  },
  {
    img: "https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_original_logo_icon_146424.png",
    title: "MongoDB",
  },
  {
    img: "https://1000marcas.net/wp-content/uploads/2020/11/MySQL-logo.png",
    title: "MySQL",
  },
  {
    img: "https://cyclr.com/wp-content/uploads/2022/03/ext-550.png",
    title: "SQL Server",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2048px-Git_icon.svg.png",
    title: "Git",
  },
  {
    img: "https://1000marcas.net/wp-content/uploads/2020/11/Java-logo.png",
    title: "Java",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png",
    title: "Python",
  },
];

const DivStyle = styled.div`
  background-color: ${({ theme }) => theme.skills.bgc};
`;

export default function About() {
  const [t] = useTranslation("global");
  return (
    <>
      <DivStyle style={{ padding: "2%" }} id="skills">
        <Container
          maxWidth={false}
          sx={{
            color: "#fff",
            padding: { lg: "1%", sm: "5%", xs: "5%" },
          }}
        >
          <div
            style={{
              paddingRight: "10%",
              paddingLeft: "10%",
              textAlign: "center",
            }}
          >
            <Typography variant="h6" gutterBottom color={"#efb810"}>
              <b>{t("skills.title")}</b>
            </Typography>
            <hr />
            <br />
            <br />
            <Row>
              <Grid container rowSpacing={5}>
                {skills.map((item, index) => (
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
                        src={item.img}
                      />
                    </Stack>
                  </Grid>
                ))}
              </Grid>
            </Row>
          </div>
        </Container>
      </DivStyle>
    </>
  );
}
