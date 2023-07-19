import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";

import global_es from "./Traslations/es/global.json";
import global_en from "./Traslations/en/global.json";
//import { ThemeProvider, createTheme } from "@mui/material/styles";
//import Themes from "./Theme/Themes.js";

//import CssBaseline from "@mui/material/CssBaseline";

i18next.init({
  interpolation: { escapeValue: false },
  lng: "es",
  resources: {
    es: {
      global: global_es,
    },
    en: {
      global: global_en,
    },
  },
});

/*const theme = createTheme({
  about: {
    bgc: "#000",
    color: "#fff",
    bgcImg: "#fff",
    bgcButton: "#efb810"
},
});
*/

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
        <App />
    </I18nextProvider>
  </React.StrictMode>
);
