import { useMemo } from "preact/hooks";

const useSx = ({ sxProp }) => useMemo(() => ({
  root: {
    justifyContent: "center",
    ...sxProp
  }
}), [sxProp]);

export default useSx;