import { CssBaseline } from "@mui/material";
import Home from "routes/home";
import NoMatch from "routes/noMatch";
import { Router } from "preact-router";
import ThemeProvider from "./ThemeProvider";

const App = () => (
  <ThemeProvider>
    <CssBaseline />
    <main>
      <Router>
        <Home path="/" />
        <NoMatch default />
      </Router>
    </main>
  </ThemeProvider>
);


export default App;
