import { Container, Divider, Grid } from "@mui/material";

import CopyrightStatement from "./CopyrightStatement";
import SocialMedia from "components/SocialMedia";
import useSx from "./useFooterSx";

const Footer = () => {
  const sx = useSx();

  return (
    <div>
      <Divider />
      <Container component="footer">
        <Grid sx={sx.gridContainer} container>
          <Grid item sm="auto" xs={12}>
            <CopyrightStatement />
          </Grid>
          <Grid item sm="auto" xs={12}>
            <SocialMedia />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

Footer.whyDidYouRender = true;

export default Footer;