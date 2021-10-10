import { useMemo } from "preact/hooks";

const useSx = () => useMemo(() => ({
  root: {
    textAlign: "center"
  }
}), []);

export default useSx;