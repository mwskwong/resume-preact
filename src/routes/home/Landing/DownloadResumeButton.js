import { useEffect, useState } from "preact/hooks";

import { Button } from "@mui/material";
import PropTypes from "prop-types";
import { getResumeURL } from "api";

const DownloadResumeButton = ({ sx }) => {
  const [resumeURL, setResumeURL] = useState();

  useEffect(() => getResumeURL().then(url => setResumeURL(url)), []);

  return (
    <Button
      sx={sx}
      variant="contained"
      color="secondary"
      size="large"
      href={resumeURL}
      target="_blank"
      rel="noopener noreferrer"
    >
      Download Resume
    </Button>
  );
};

DownloadResumeButton.propTypes = {
  sx: PropTypes.object
};

DownloadResumeButton.whyDidYouRender = true;

export default DownloadResumeButton;