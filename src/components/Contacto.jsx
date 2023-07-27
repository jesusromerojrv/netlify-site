import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "react-bootstrap/Button";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const BoxStyle = styled(Box)`
  background-color: ${({ theme }) => theme.contact.bgc};
`;

export default function Contacto() {
  const [t] = useTranslation("global");
  const [valueName, setValueName] = React.useState("");
  const [valueEmail, setValueEmail] = React.useState("");
  const [valueSubject, setValueSubject] = React.useState("");
  const [valueDesc, setValueDesc] = React.useState("");
  const form = useRef();

  const handleSubmit = (e) => {
    alert("The value: " + value);
    setValue(""); //To reset the textfield value
    e.preventDefault();
  };

  const sendEmail = (e) => {
    if (
      valueName.length > 0 &&
      valueEmail.length > 0 &&
      valueSubject.length > 0 &&
      valueDesc.length > 0
    ) {
      e.preventDefault();

      emailjs
        .sendForm(
          "service_yuvyc89",
          "template_78hknza",
          form.current,
          "kOntKBwTSBO7hYKfZ"
        )
        .then(
          (result) => {
            console.log(result.text);
            alert("Enviado Correctamente.");
            setValueName("");
            setValueEmail("");
            setValueSubject("");
            setValueDesc("");
          },
          (error) => {
            console.log(error.text);
            alert("Hubo un error con el envío.");
          }
        );
    } else {
      alert("Porfavor completa todos los campos.");
    }
  };
  return (
    <BoxStyle
      component="form"
      noValidate
      autoComplete="off"
      sx={{
        padding: "10%",
        paddingTop: { lg: "2%", sm: "5%", xs: "5%" },
        textAlign: "center",
      }}
      id="contenedorContacto"
      ref={form}
      onSubmit={sendEmail}
    >
      <Typography variant="h6" gutterBottom color={"#efb810"}>
        <b>{t("contact.title")}</b>
      </Typography>
      <hr style={{ color: "#fff" }} />
      <br />
      <br />
      <TextField
        fullWidth
        label={t("contact.name")}
        sx={{ backgroundColor: "#fff" }}
        name="nombre"
        value={valueName}
        onChange={(e) => setValueName(e.target.value)}
      />
      <br />
      <br />
      <TextField
        fullWidth
        label={t("contact.email")}
        sx={{ backgroundColor: "#fff" }}
        name="correo"
        value={valueEmail}
        onChange={(e) => setValueEmail(e.target.value)}
      />
      <br />
      <br />
      <TextField
        fullWidth
        label={t("contact.subject")}
        sx={{ backgroundColor: "#fff" }}
        name="asunto"
        value={valueSubject}
        onChange={(e) => setValueSubject(e.target.value)}
      />
      <br />
      <br />
      <TextField
        fullWidth
        label={t("contact.message")}
        multiline
        rows={10}
        sx={{ backgroundColor: "#fff" }}
        name="descripcion"
        value={valueDesc}
        onChange={(e) => setValueDesc(e.target.value)}
      />
      <br />
      <br />
      <Button
        variant="outline-light"
        style={{ width: "100%", background: "#efb810", color: "#1C2130" }}
        type="submit"
        value="Send"
      >
        {t("contact.button")}
      </Button>
    </BoxStyle>
  );
}
