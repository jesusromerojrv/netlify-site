import { Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

//IMAGENES DE LAS SKILLS
import img1 from "../assets/skills/css3.webp";
import img2 from "../assets/skills/html.webp";
import img3 from "../assets/skills/javascript.webp";
import img4 from "../assets/skills/vuejs.webp";
import img5 from "../assets/skills/react.webp";
import img6 from "../assets/skills/nodejs.webp";
import img7 from "../assets/skills/mongodb.webp";
import img8 from "../assets/skills/mysql.webp";
import img9 from "../assets/skills/sqlserver.webp";
import img10 from "../assets/skills/git.webp";
import img11 from "../assets/skills/java.webp";
import img12 from "../assets/skills/python.webp";

//------------------------

const skills = [
  {
    img: img1,
    title: "CSS",
  },
  {
    img: img2,
    title: "HTML",
  },
  {
    img: img3,
    title: "JAVASCRIPT",
  },
  {
    img: img4,
    title: "VUE JS",
  },
  {
    img: img5,
    title: "REACT",
  },
  {
    img: img6,
    title: "NODE JS",
  },
  {
    img: img7,
    title: "MongoDB",
  },
  {
    img: img8,
    title: "MySQL",
  },
  {
    img: img9,
    title: "SQL Server",
  },
  {
    img: img10,
    title: "Git",
  },
  {
    img: img11,
    title: "Java",
  },
  {
    img: img12,
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
                        alt={item.title}
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
