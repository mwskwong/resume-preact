import { useMemo } from "preact/hooks";

const useSx = () => useMemo(() => ({
  root: {
    p: 3
  }
}), []);

export default useSx;