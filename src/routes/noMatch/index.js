import { Button, Container, Typography } from "@mui/material";

import useSx from "./useNoMatchSx";

const NoMatch = () => {
  const sx = useSx();

  return (
    <Container component="main" sx={sx.root}>
      <Typography variant="h1" sx={sx.noMatch}>
        404
      </Typography>
      <Typography variant="h5" sx={sx.noMatchMessage}>
        The page you were looking for does not exist.
      </Typography>
      <Button variant="contained" color="secondary" size="large" component={"a"} href="/">
        go back to home
      </Button>
    </Container>
  );
};

NoMatch.whyDidYouRender = true;

export default NoMatch;
