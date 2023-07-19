import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./components/Inicio";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Themes from "./Theme/Themes";
import { ThemeProvider } from "styled-components";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState("dark");
  return (
    <>
      <ThemeProvider theme={Themes[theme]}>
        <Header theme={theme} setTheme={setTheme}/>
        <Inicio />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
