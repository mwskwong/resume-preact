import "@fontsource/rubik/latin-300.css";
import "@fontsource/rubik/latin-400.css";
import "@fontsource/rubik/latin-500.css";
import "@fontsource/rubik/latin-700.css";
import "./azonix.css";

import { createTheme } from "@mui/material";
import { deepmerge } from "@mui/utils";
import getDesignTokens from "./getDesignTokens";
import getThemedComponents from "./getThemedComponents";

const lightTheme = createTheme(getDesignTokens("light"));
export const brandingLightTheme = deepmerge(lightTheme, getThemedComponents(lightTheme));

const darkTheme = createTheme(getDesignTokens("dark"));
export const brandingDarkTheme = deepmerge(darkTheme, getThemedComponents(darkTheme));