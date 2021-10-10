import BrandingThemeProvider from "./BrandingThemeProvider";
import { CssBaseline } from "@mui/material";
import Home from "routes/home";
import NoMatch from "routes/noMatch";
import { Router } from "preact-router";

const App = () => (
  <BrandingThemeProvider>
    <CssBaseline />
    <main>
      <Router>
        <Home path="/" />
        <NoMatch default />
      </Router>
    </main>
  </BrandingThemeProvider>
);


export default App;
