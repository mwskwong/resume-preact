import { useMemo } from "react";

const useSx = () => useMemo(() => ({
  root: {
    textAlign: "center",
    color: "text.secondary"
  }
}), []);

export default useSx;