import { useMemo } from "preact/hooks";

const useSx = ({ active }) => useMemo(() => ({
  root: {
    borderRadius: 1
  },
  textPrimary: {
    typography: "button",
    color: active && "primary.main"
  }
}), [active]);

export default useSx;