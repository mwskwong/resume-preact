import { useMemo } from "preact/hooks";

const useSx = () => useMemo(() => ({
  root: {
    background: theme => `linear-gradient(
      ${theme.palette.background.sectionPrimary} 0%,
      ${theme.palette.background.default} 100%
    )`
  },
  gridContainer: {
    mt: 3,
    pt: 3
  }
}), []);

export default useSx;