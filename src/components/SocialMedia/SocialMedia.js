import { GitHub, LinkedIn } from "@mui/icons-material";
import { IconButton, Stack } from "@mui/material";
import { useEffect, useState } from "preact/hooks";

import PropTypes from "prop-types";
import StackOverflow from "components/icons/StackOverflow";
import camelCase from "lodash/camelCase";
import { getSocialMedia } from "api";
import useSx from "./useSocialMediaSx";

const Icons = {
  stackOverflow: StackOverflow,
  linkedIn: LinkedIn,
  gitHub: GitHub
};

const defaultSocialMedia = [
  { name: "GitHub" },
  { name: "LinkedIn" },
  { name: "Stack Overflow" }
];

const SocialMedia = ({ sx: sxProp }) => {
  const sx = useSx({ sxProp });
  const [socialMedia, setSocialMedia] = useState(defaultSocialMedia);

  useEffect(() => getSocialMedia().then(socialMedia => setSocialMedia(socialMedia)), []);

  return (
    <Stack spacing={1} direction="row" sx={sx.root}>
      {socialMedia.map(({ name, link }, index) => {
        const Icon = Icons[camelCase(name)];

        return (
          <IconButton
            key={name}
            href={link}
            aria-label={name}
            target="_blank"
            rel="noopener noreferrer"
            edge={index === 0 ? "start" : index === socialMedia.length - 1 ? "end" : false}
          >
            <Icon />
          </IconButton>
        );
      })}
    </Stack>
  );
};

SocialMedia.propTypes = {
  sx: PropTypes.object
};

SocialMedia.whyDidYouRender = true;

export default SocialMedia;