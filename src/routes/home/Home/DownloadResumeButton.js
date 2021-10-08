import { Button } from "@mui/material";
import PropTypes from "prop-types";

const DownloadResumeButton = ({ sx }) => {
  return (
    <Button
      sx={sx}
      variant="outlined"
      size="large"
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