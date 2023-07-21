import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "react-bootstrap/Button";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

const BoxStyle = styled(Box)`
  background-color: ${({ theme }) => theme.contact.bgc};
`;

export default function Contacto() {
  const [t] = useTranslation("global");
  return (
    <BoxStyle
      component="form"
      noValidate
      autoComplete="off"
      sx={{ padding: "10%", paddingTop: { lg: "2%", sm: "5%", xs: "5%" }, textAlign: "center" }}
      id="contenedorContacto"
    >
      <Typography variant="h6" gutterBottom color={"#efb810"}>
        <b>{t("contact.title")}</b>
      </Typography>
      <hr style={{color: "#fff"}}/>
      <br />
      <br />
      <TextField
        fullWidth
        label={t("contact.email")}
        sx={{ backgroundColor: "#fff" }}
      />
      <br />
      <br />
      <TextField
        fullWidth
        label={t("contact.message")}
        multiline
        rows={10}
        sx={{ backgroundColor: "#fff" }}
      />
      <br />
      <br />
      <Button
        variant="outline-light"
        style={{ width: "100%", background: "#efb810", color: "#1C2130"}}
      >
        {t("contact.button")}
      </Button>
    </BoxStyle>
  );
}
