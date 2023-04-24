import { useState } from "react";
import { Theme } from "../types/theme";
import { Box } from "./Box";
import { TextBox } from "./TextBox";
import { FirstChildren } from "./FirstChildren";

const lightPalette = { palette: { border: "5px solid white" } };
const darkPalette = { palette: { border: "5px solid black" } };
export const PlainComponent = () => {
  const [theme, setTheme] = useState<Theme>(lightPalette);

  console.log("PlainCompoent");
  const onClickMode = (mode: "LIGHT" | "DARK") => {
    if (mode === "LIGHT") {
      setTheme(lightPalette);
    } else {
      setTheme(darkPalette);
    }
  };

  return (
    <Box width="1200px" height="800px" background="red">
      App Root
      <div style={{ display: "flex", gap: "10px" }}>
        <button onClick={() => onClickMode("LIGHT")}>LIGHT</button>
        <button onClick={() => onClickMode("DARK")}>DARK</button>
      </div>
      <TextBox content={`State: ${JSON.stringify(theme)}`} />
      <FirstChildren theme={theme} />
    </Box>
  );
};
