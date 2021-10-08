import { Box, Typography } from "@mui/material";
import { useEffect, useRef } from "react";

import Typewriter from "typewriter-effect/dist/core";
import useSx from "./useTitleSx";

const occupations = [
  "System DBA",
  "Front-End Developer"
];

const Title = () => {
  const sx = useSx();
  const typewriterRef = useRef();

  useEffect(() => {
    new Typewriter(typewriterRef.current, {
      strings: [
        "Matthew Kwong.",
        ...occupations.map(occupation => `a ${occupation}.`)
      ],
      loop: true,
      autoStart: true
    });
  }, []);

  return (
    <Box sx={sx.root}>
      <Typography sx={sx.greetings} variant="h5" gutterBottom>
        Greetings
      </Typography>
      <Typography sx={sx.title} variant="h2">
        {"I Am "}
        <Box component="span" ref={typewriterRef} sx={sx.importantText} />
      </Typography>
    </Box>
  );
};

Title.whyDidYouRender = true;

export default Title;