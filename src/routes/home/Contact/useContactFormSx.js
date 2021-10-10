import { useMemo } from "preact/hooks";

const useSx = () => useMemo(() => ({
  submitButton: {
    float: "right",
    mt: 4
  }
}), []);

export default useSx;