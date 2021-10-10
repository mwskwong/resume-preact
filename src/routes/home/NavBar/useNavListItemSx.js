import { useMemo } from "preact/hooks";

const useSx = ({ active }) => useMemo(() => ({
  root: {
    borderRadius: 1
  },
  textPrimary: {
    fontWeight: active && "bold",
    color: active ? "primary.main" : "text.primary",
    textTransform: "capitalize"
  }
}), [active]);

export default useSx;