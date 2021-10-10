import { brandingDarkTheme, brandingLightTheme } from "brandingTheme";

import PropTypes from "prop-types";
import { ThemeProvider } from "@mui/material";
import { memo } from "react";

const BrandingThemeProvider = ({ mode = "light", children }) => {
  const theme = mode === "light" ? brandingLightTheme : brandingDarkTheme;

  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
};

BrandingThemeProvider.muiName = ThemeProvider.muiName;
BrandingThemeProvider.propTypes = {
  mode: PropTypes.oneOf(["light", "dark"]),
  children: PropTypes.node
};

BrandingThemeProvider.whyDidYouRender = true;

export default memo(BrandingThemeProvider);