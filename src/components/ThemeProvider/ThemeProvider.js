import { darkTheme, lightTheme } from "./theme";

import { ThemeProvider as MuiThemeProvider } from "@mui/material";
import PropTypes from "prop-types";
import { memo } from "react";

const ThemeProvider = ({ mode = "light", children }) => {
  return (
    <MuiThemeProvider theme={mode === "light" ? lightTheme : darkTheme}>
      {children}
    </MuiThemeProvider>
  );
};

ThemeProvider.muiName = MuiThemeProvider.muiName;
ThemeProvider.propTypes = {
  mode: PropTypes.oneOf(["light", "dark"]),
  children: PropTypes.node
};

ThemeProvider.whyDidYouRender = true;

export default memo(ThemeProvider);