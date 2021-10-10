import { useMemo } from "preact/hooks";

const useSx = () => useMemo(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  title: {
    color: "primary.main",
    textAlign: "center",
    textTransform: "capitalize",
    mt: 2
  },
  value: {
    color: "text.primary",
    textAlign: "center"
  }
}), []);

export default useSx;