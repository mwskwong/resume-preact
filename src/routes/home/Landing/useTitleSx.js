import { useMemo } from "react";

const useSx = () => useMemo(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  greetings: {
    textTransform: "capitalize",
    color: "text.primary"
  },
  title: {
    textTransform: "capitalize",
    textAlign: "center",
    color: "text.primary",
    "@media (max-width: 520px)": {
      height: theme => `${theme.typography.h1.lineHeight * 2}em`
    },
    "@media (max-width: 300px)": {
      height: theme => `${theme.typography.h1.lineHeight * 3}em`
    }
  },
  importantText: {
    color: "primary.main"
  }
}), []);

export default useSx;