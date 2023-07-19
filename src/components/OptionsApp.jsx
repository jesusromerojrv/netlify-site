import { Container } from "@mui/material";
import SelectorLen from "./SelectorLenguague";
import CustomizedSwitches from "./DarkMode";

export default function Options() {
  return (
    <Container
      maxWidth={false}
      className="contCards"
      sx={{
        py: [1, 1],
        marginBottom: "-1%",
        zIndex: "2000",
        position: "relative",
        justifyContent: "right",
        display: "flex",
      }}
    >
      <CustomizedSwitches />
      <SelectorLen />
    </Container>
  );
}
