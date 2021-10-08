import { Facebook, GitHub, LinkedIn } from "@mui/icons-material";
import { IconButton, Stack } from "@mui/material";

import PropTypes from "prop-types";
import useSx from "./useSocialMediaSx";

const SocialMedia = ({ sx: sxProp }) => {
  const sx = useSx({ sxProp });

  return (
    <Stack spacing={1} direction="row" sx={sx.root}>
      <IconButton
        href="" // TODO
        aria-label="navigate to Facebook profile"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Facebook />
      </IconButton>
      <IconButton
        href="" // TODO
        aria-label="navigate to LinkedIn profile"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LinkedIn />
      </IconButton>
      <IconButton
        href="" // TODO
        aria-label="navigate to Github profile"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GitHub />
      </IconButton>
    </Stack>
  );
};

SocialMedia.propTypes = {
  sx: PropTypes.object
};

SocialMedia.whyDidYouRender = true;

export default SocialMedia;