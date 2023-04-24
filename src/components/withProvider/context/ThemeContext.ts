import { createContext } from "react";
import { Theme } from "../../../types/theme";
import { lightPalette } from "../../../theme/palette";

export const ThemeContext = createContext<Theme>(lightPalette);
