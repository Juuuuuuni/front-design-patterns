import { useState } from "react";
import { Theme } from "../../types/theme";
import { darkPalette, lightPalette } from "../../theme/palette";
import { Box } from "../Box";
import { TextBox } from "../TextBox";
import { FirstChildren } from "./FirstChildren";
import { ThemeContext } from "./context/ThemeContext";

export const ProviderPatternComponent = () => {
  const [theme, setTheme] = useState<Theme>(lightPalette);

  const onClickMode = (mode: "LIGHT" | "DARK") => {
    if (mode === "LIGHT") {
      setTheme(lightPalette);
    } else {
      setTheme(darkPalette);
    }
  };

  return (
    <ThemeContext.Provider value={{ palette: theme.palette }}>
      <Box width="1200px" height="800px" background="red">
        App Root with Provider Pattern
        <div style={{ display: "flex", gap: "10px" }}>
          <button onClick={() => onClickMode("LIGHT")}>LIGHT</button>
          <button onClick={() => onClickMode("DARK")}>DARK</button>
        </div>
        <TextBox content={`State: ${JSON.stringify(theme)}`} />
        <FirstChildren />
      </Box>
    </ThemeContext.Provider>
  );
};
