import { useMemo } from "preact/hooks";

const useSx = () => useMemo(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh"
  },
  noMatch: {
    fontFamily: "Azonix, sans-serif",
    textAlign: "center",
    mb: 4,
    color: "primary.main"
  },
  noMatchMessage: {
    textAlign: "center",
    mb: 4
  }
}), []);

export default useSx;