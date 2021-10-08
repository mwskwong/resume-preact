import { Box, Container, Grid } from "@mui/material";

import { CONTACT } from "constants/nav";
import ContactForm from "./ContactForm";
import HexSlice6 from "components/icons/HexSlice6";
import PersonalInfo from "./PersonalInfo";
import SectionHeader from "components/SectionHeader";
import useSx from "./useContactSx";

const Contact = () => {
  const sx = useSx();

  return (
    <Container component="section" id={CONTACT.id}>
      <SectionHeader
        heading="Get In Touch"
        Icon={HexSlice6}
      />
      <Box sx={sx.gridContainer}>
        <Grid container spacing={2}>
          <Grid item md={4} xs={12}>
            <PersonalInfo />
          </Grid>
          <Grid item md xs={12}>
            <ContactForm />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

Contact.whyDidYouRender = true;

export default Contact;