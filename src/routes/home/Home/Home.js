import { Container, Toolbar } from "@mui/material";

import DownloadResumeButton from "./DownloadResumeButton";
import { HOME } from "constants/nav";
import SocialMedia from "components/SocialMedia";
import Title from "./Title";
import useSx from "./useHomeSx";

const Home = () => {
  const sx = useSx();

  return (
    <Container component="section" sx={sx.container} id={HOME.id}>
      <Toolbar />
      <Title />
      <SocialMedia sx={sx.socialMedia} />
      <DownloadResumeButton sx={sx.downloadResumeButton} />
    </Container>
  );
};

Home.whyDidYouRender = true;

export default Home;